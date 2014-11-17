class Log < ActiveRecord::Base
  belongs_to :user
  belongs_to :pairing
  has_many :favorites

  def self.today_log_by_user(user_id)
    Log.where(["user_id = ? AND created_at >= ?", user_id, Time.now.beginning_of_day])
  end

  def self.buddfeed(pairing_id)
    pairing_id ? Log.where(pairing_id: pairing_id) : Log.order('created_at desc').limit(50)
  end
end