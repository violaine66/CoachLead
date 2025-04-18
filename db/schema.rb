# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2025_04_18_133515) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.string "status"
    t.bigint "user_id", null: false
    t.bigint "training_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["training_id"], name: "index_attendances_on_training_id"
    t.index ["user_id"], name: "index_attendances_on_user_id"
  end

  create_table "job_load_evaluations", force: :cascade do |t|
    t.string "period"
    t.integer "rating"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_job_load_evaluations_on_user_id"
  end

  create_table "match_performances", force: :cascade do |t|
    t.date "match_date"
    t.boolean "played"
    t.integer "yellow_card"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_match_performances_on_user_id"
  end

  create_table "player_profils", force: :cascade do |t|
    t.integer "age"
    t.string "job"
    t.float "weight"
    t.integer "children_count"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "first_name"
    t.string "last_name"
    t.index ["user_id"], name: "index_player_profils_on_user_id"
  end

  create_table "training_participations", force: :cascade do |t|
    t.boolean "present"
    t.integer "cognitive_fatigue"
    t.integer "physical_fatigue"
    t.integer "mood"
    t.integer "after_intensity"
    t.integer "after_fatigue"
    t.boolean "pleasure"
    t.bigint "user_id", null: false
    t.bigint "training_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["training_id"], name: "index_training_participations_on_training_id"
    t.index ["user_id"], name: "index_training_participations_on_user_id"
  end

  create_table "trainings", force: :cascade do |t|
    t.date "date"
    t.string "location"
    t.string "title"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "role", default: "joueur", null: false
    t.string "pseudo"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["pseudo"], name: "index_users_on_pseudo", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "attendances", "trainings"
  add_foreign_key "attendances", "users"
  add_foreign_key "job_load_evaluations", "users"
  add_foreign_key "match_performances", "users"
  add_foreign_key "player_profils", "users"
  add_foreign_key "training_participations", "trainings"
  add_foreign_key "training_participations", "users"
end
