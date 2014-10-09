class Pairing < ActiveRecord::Base
  has_and_belongs_to_many :users


  # This will generate pairings for this week
  #

  def self.generate!
    all_users = User.all.to_a
    all_users.shuffle! # randomize order for now
    while valid_pair(all_users.first, all_users.last)
       p = new_pairing(all_users.shift, all_users.pop)
    end
    p.users << all_users if all_users.any? #
    current
  end

  # Checks to make sure they are valid
  #

  def self.valid_pair(user1, user2)
    user1 != user2 && user1 && user2 # user is not the same && both are not nil.
  end

  def self.new_pairing(user1, user2)
    p = create(start_date: current_start_date, end_date: current_end_date, users: [user1, user2] )
    p.reload if p.save
  end

  def self.current
    Pairing.where(["start_date <= ? AND end_date >= ?", Time.now, Time.now])
  end

  def self.current_start_date
    Time.now.utc.beginning_of_week
  end

  def self.current_end_date
    Time.now.utc.end_of_week
  end

end