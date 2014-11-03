# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141103125729) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: true do |t|
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "log_favorite", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "favorite_id"
  end

  create_table "log_favorites", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "favorite_id"
  end

  create_table "log_pairing", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "pairing_id"
  end

  create_table "log_user", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "user_id"
  end

  create_table "log_user_pairing", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "user_id"
    t.integer "pairing_id"
  end

  create_table "logs", force: true do |t|
    t.integer  "user_id"
    t.integer  "pairing_id"
    t.string   "message"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pairing_logs", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "pairing_id"
  end

  create_table "pairings", force: true do |t|
    t.datetime "start_date"
    t.datetime "end_date"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "pairings_users", id: false, force: true do |t|
    t.integer "user_id"
    t.integer "pairing_id"
  end

  create_table "user_logs", id: false, force: true do |t|
    t.integer "log_id"
    t.integer "user_id"
  end

  create_table "users", force: true do |t|
    t.string   "name"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "visible",    default: true
  end

  add_index "users", ["visible"], name: "index_users_on_visible", using: :btree

end
