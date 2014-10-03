class CreatePairingsUsers < ActiveRecord::Migration
  def change
    create_table :pairings_users, id: false do |t|
      t.belongs_to :user
      t.belongs_to :pairing
    end
  end
end
