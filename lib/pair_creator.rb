require 'comprehend'
require 'rgl/adjacency'
require 'rgl/traversal'

class PairCreator
    #------------------------------------------------------------------------------
    # constructor
    #------------------------------------------------------------------------------
    def initialize(weeks_without_repairing=6)
        @offset = Time.now - (1.days + weeks_without_repairing.weeks)
        @curr_time = Time.now
    end

    #------------------------------------------------------------------------------
    # Delete all old pairings
    #------------------------------------------------------------------------------
    def delete_old_pairings!()
        Pairing.delete_at(Time.now)
    end

    #------------------------------------------------------------------------------
    # Get users from Postgresql
    #------------------------------------------------------------------------------
    def get_users()
        users = User.all()
        return users
    end

    #------------------------------------------------------------------------------
    # Get an array of user ids
    #------------------------------------------------------------------------------
    def get_user_ids(users)
        user_ids = users.comprehend{ |u| u.id}
        user_ids.shuffle!
        return user_ids
    end

    #------------------------------------------------------------------------------
    # Add edges to the graph
    #------------------------------------------------------------------------------
    def add_edges(users, graph)
      for i1 in 0..(users.count-2) do
          for i2 in (i1+1)..(users.count-1) do
              if Pairing.no_past_pairing(users[i1].id, users[i2].id, @offset) then
                  graph.add_edge(users[i1].id, users[i2].id)
              end
          end
      end
    end

    #------------------------------------------------------------------------------
    # find a user with a minimum number of past pairings
    #------------------------------------------------------------------------------
    def find_user_with_fewest_past_pairings(graph, exclude_list=[])
      min_user = nil
      for v in graph.each_vertex() do
         if not exclude_list.include?(v) then
            if not min_user or graph.out_degree(v) > graph.out_degree(min_user) then
               min_user = v
            end
         end
      end
      return min_user
    end

    #------------------------------------------------------------------------------
    # if there's an odd number of people then greate a group of 3
    #------------------------------------------------------------------------------
    def create_threesome(users, graph)
      min_user = find_user_with_fewest_past_pairings(graph)
      threesome = [min_user]
      exclude_list = [min_user]
      
      bailout_counter = users.count - 1
      loop do
        partner_1 = find_user_with_fewest_past_pairings(graph, exclude_list)
        #puts partner_1.to_s
        if verify_pairing(min_user, partner_1) then
            threesome.push(partner_1)
            if threesome.length == 3
                return threesome
            end
        end
        exclude_list.push(partner_1)

        bailout_counter -= 1
        if bailout_counter == 0 then
            break
        end
      end

      return []
    end

    #------------------------------------------------------------------------------
    #------------------------------------------------------------------------------
    def create_graph(vertices)
      dg=RGL::AdjacencyGraph[]
      dg.add_vertices(*vertices)
      return dg
    end

    #------------------------------------------------------------------------------
    #------------------------------------------------------------------------------
    def delete_vertices(vertex_list, graph)
      for v in vertex_list do
          graph.remove_vertex(v)
      end
    end

    #------------------------------------------------------------------------------
    # Save new pairings from path
    #------------------------------------------------------------------------------
    def create_pairings!(path)
        while path.length() > 1 do
            u1 = User.where("id = ?", path.pop())[0]
            u2 = User.where("id = ?", path.pop())[0]
            Pairing.new_pairing(u1, u2, @curr_time)
        end
    end

    #------------------------------------------------------------------------------
    # return true if 2 users may be paired together
    #------------------------------------------------------------------------------
    def verify_pairing(user1, user2)
        return Pairing.valid_pair(user1, user2, @offset)
    end

    #------------------------------------------------------------------------------
    # returns true if all adjacent pairs ids in the path represent valid pairings
    #------------------------------------------------------------------------------
    def verify_pairings(path, users)
        for v in 0..(path.count-2) do
             if not verify_pairing(users[v].id, users[v+1].id) then
                return false
             end
        end
        return true
    end

    #------------------------------------------------------------------------------
    # This is a sanity check to look for duplicate entries
    #------------------------------------------------------------------------------
    def bailout(path, vertices, users)
        if path.to_set.length != vertices.count or not verify_pairings(path, users) then
            # emergency bail-out ... the search step must be reviewed
            puts 'emergency bail-out ... the search step must be reviewed'
            exit
        end
    end
    #------------------------------End Function Definitions------------------------


    def generate!
      #------------------------------------------------------------------------------
      # Delete old pairings
      #------------------------------------------------------------------------------
      delete_old_pairings!()

      #------------------------------------------------------------------------------
      # Get all users
      #------------------------------------------------------------------------------
      users = get_users()

      #------------------------------------------------------------------------------
      # Create graph of possible pairings
      #------------------------------------------------------------------------------
      vertices = get_user_ids(users)
      dg = create_graph(vertices)
      add_edges(users, dg)

      #------------------------------------------------------------------------------
      # If there's an odd number of people select the person with the fewest past pairings
      #------------------------------------------------------------------------------
      if (users.count % 2) == 1 then
          threesome = create_threesome(users, dg)
          delete_vertices(threesome, dg)
          vertices = vertices.comprehend{|v| v if not threesome.include?(v)}
          users = users.comprehend{ |u|  u if vertices.include?(u.id) }
          dg = create_graph(vertices)
          add_edges(users, dg)
          threesome = threesome.comprehend{ |u| User.where("id = ?", u)[0]}
          p = Pairing.new_pairing(threesome.shift(), threesome.pop(), @curr_time)
          p.users << threesome.pop()
      end

      #------------------------------------------------------------------------------
      # Find a path through the graph
      #------------------------------------------------------------------------------
      path = []
      for v in dg.dfs_iterator(vertices[0]) do
          path.append(v)
      end

      #------------------------------------------------------------------------------
      # This is a sanity check to look for duplicate entries
      #------------------------------------------------------------------------------
      bailout(path, vertices, users)

      #------------------------------------------------------------------------------
      # Save pairings to Postgresql
      #------------------------------------------------------------------------------
      create_pairings!(path)

    end

end

