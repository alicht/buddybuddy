class CreatePairings < ActiveRecord::Migration
  def change
    create_table :pairings do |t|
      t.datetime :start_date
      t.datetime :end_date
      t.timestamps
    end
  end
end
