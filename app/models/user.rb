class User < ActiveRecord::Base
  has_and_belongs_to_many :pairings
  has_many :logs
  has_many :logs

  def hide!
    update_attribute(visible: false)
  end
end