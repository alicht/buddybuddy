class Log < ActiveRecord::Base
  belongs_to :user
  belongs_to :pairing

  def self.today_log_by_user(user_id)
    Log.where(["user_id = ? AND created_at >= ?", user_id, Time.now.beginning_of_day])
  end

end