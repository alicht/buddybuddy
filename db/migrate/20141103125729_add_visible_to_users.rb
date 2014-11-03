class AddVisibleToUsers < ActiveRecord::Migration
  def change
    add_column :users, :visible, :boolean, default: true
    add_index :users, :visible
  end
end
