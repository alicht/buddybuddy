class Pairing < ActiveRecord::Base
  has_and_belongs_to_many :users
  has_many :logs

  @@week_offset = 2

  def self.delete_at(time = Time.now)
    at(time).delete_all
  end

  # This will generate pairings for this week
  #

  def self.generate!(time = Time.now)
    delete_at(time) # this only allows 1 of current pairings for the given 'time'
    all_users = User.all.to_a
    all_users.shuffle! # randomize order for now
    while all_users.length > 1
     if valid_pair(all_users.first, all_users.last, time) || all_users.length == 2 # assuming 1/6 of the last 6 will work.
       p = new_pairing(all_users.shift, all_users.pop, time)
     else
       all_users.shuffle!
     end
    end
    p.users << all_users if all_users.any? #
    at(time)
  end

  # Checks to make sure they are valid
  #

  def self.valid_pair(user1, user2, time = Time.now)
    user1 != user2 && user1 && user2 && no_past_pairing(user1, user2, time) # user is not the same && both are not nil.
  end

  def self.no_past_pairing(user1, user2, time = Time.now)
    Pairing.where( ["start_date <= ? AND end_date >= ?", time - @@week_offset.week, start_date(time) - 1.day]).select{ |p|
      p.user_ids.includes?(user1.id) && p.user_ids.includes?(user2.id)
    }.count == 0
  end

  # default new pairing creation
  #

  def self.new_pairing(user1, user2, time = Time.now)
    create(start_date: start_date(time), end_date: end_date(time), users: [user1, user2] )
  end

  # Time helpers
  #

  def self.at(time = Time.now)
    Pairing.where(["start_date <= ? AND end_date >= ?", time, time])
  end

  def self.start_date(time = Time.now)
    time.utc.beginning_of_week
  end

  def self.end_date(time = Time.now)
    time.utc.end_of_week
  end

end