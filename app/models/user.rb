class User < ActiveRecord::Base
  has_and_belongs_to_many :pairings
  has_many :logs
end