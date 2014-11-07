require 'comprehend'
require 'rgl/adjacency'
require 'rgl/traversal'

class PairCreator
    #------------------------------------------------------------------------------
    # constants
    #------------------------------------------------------------------------------
    weeks_without_repairing = 6
    @@offset = Time.now - (1.days + weeks_without_repairing.weeks)

    #------------------------------------------------------------------------------
    # Delete all old pairings
    #------------------------------------------------------------------------------
    def delete_old_pairings!()
        Pairing.delete_at(Time.now - 1.day)
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
              if Pairing.no_past_pairing(users[i1].id, users[i2].id, @@offset) then
                  graph.add_edge(users[i1].id, users[i2].id)
              end
          end
      end
    end

    #------------------------------------------------------------------------------
    # Save new pairings from path
    #------------------------------------------------------------------------------
    def create_pairings!(path, start_time)
        while path.length() > 1 do
            u1 = User.where("id = ?", path.pop())[0]
            u2 = User.where("id = ?", path.pop())[0]
            Pairing.new_pairing(u1, u2, start_time)
        end
    end

    #------------------------------------------------------------------------------
    # return true if 2 users may be paired together
    #------------------------------------------------------------------------------
    def verify_pairing(user1, user2)
        return Pairing.valid_pair(user1.id, user2.id, @@offset)
    end

    #------------------------------------------------------------------------------
    # returns true if all adjacent pairs ids in the path represent valid pairings
    #------------------------------------------------------------------------------
    def verify_pairings(path, users)
        for v in 0..(path.count-2) do
             if not verify_pairing(users[v], users[v+1]) then
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
      dg=RGL::AdjacencyGraph[]
      dg.add_vertices(*vertices)
      add_edges(users, dg)

      #------------------------------------------------------------------------------
      # If there's an odd number of people select the person with the fewest past pairings
      #------------------------------------------------------------------------------
      extra_vertex = nil
      if (users.count % 2) == 1 then
          for v in dg.each_vertex() do
              if not extra_vertex or dg.out_degree(v) > dg.out_degree(extra_vertex) then
                  extra_vertex = v
              end
          end
          vertices.delete_at(vertices.index(extra_vertex))
      end

      #------------------------------------------------------------------------------
      # Find a path through the graph
      #------------------------------------------------------------------------------
      path = []
      if extra_vertex then
          for v in dg.dfs_iterator(extra_vertex) do
              path.append(v)
          end
          path.shift
      else
          for v in dg.dfs_iterator(vertices[0]) do
              path.append(v)
          end
      end

      #------------------------------------------------------------------------------
      # This is a sanity check to look for duplicate entries
      #------------------------------------------------------------------------------
      bailout(path, vertices, users)

      #------------------------------------------------------------------------------
      # Save pairings to Postgresql
      #------------------------------------------------------------------------------
      start_time = Time.now
      create_pairings!(path, start_time)

      #------------------------------------------------------------------------------
      # Make a group of three if there's an extra person
      #------------------------------------------------------------------------------
      if extra_vertex then
          user = User.where("id = ?", extra_vertex)[0]
          pairs = Pairing.all().to_a
          for pair in pairs.shuffle! do
              u1, u2 = pair.users
              u1 = User.where("id = ?", u1)[0]
              u2 = User.where("id = ?", u2)[0]
              if Pairing.no_past_pairing(user.id, u1.id, @@offset) and
                 Pairing.no_past_pairing(user.id, u2.id, @@offset) then
                   Pairing.new_pairing(user, u1, start_time)
                   Pairing.new_pairing(user, u2, start_time)
                   break
              end
          end
      end
    end

end

