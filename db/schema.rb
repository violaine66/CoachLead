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

ActiveRecord::Schema[7.1].define(version: 2025_04_22_170008) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.string "service_name", null: false
    t.bigint "byte_size", null: false
    t.string "checksum"
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "active_storage_variant_records", force: :cascade do |t|
    t.bigint "blob_id", null: false
    t.string "variation_digest", null: false
    t.index ["blob_id", "variation_digest"], name: "index_active_storage_variant_records_uniqueness", unique: true
  end

  create_table "after_training_evaluations", force: :cascade do |t|
    t.integer "after_intensity"
    t.integer "after_fatigue"
    t.boolean "pleasure"
    t.bigint "user_id", null: false
    t.bigint "training_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["training_id"], name: "index_after_training_evaluations_on_training_id"
    t.index ["user_id"], name: "index_after_training_evaluations_on_user_id"
  end

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
    t.text "commentaires"
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

  create_table "pre_training_evaluations", force: :cascade do |t|
    t.boolean "present"
    t.integer "cognitive_fatigue"
    t.integer "physical_fatigue"
    t.integer "mood"
    t.bigint "user_id", null: false
    t.bigint "training_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["training_id"], name: "index_pre_training_evaluations_on_training_id"
    t.index ["user_id"], name: "index_pre_training_evaluations_on_user_id"
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

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "active_storage_variant_records", "active_storage_blobs", column: "blob_id"
  add_foreign_key "after_training_evaluations", "trainings"
  add_foreign_key "after_training_evaluations", "users"
  add_foreign_key "attendances", "trainings"
  add_foreign_key "attendances", "users"
  add_foreign_key "job_load_evaluations", "users"
  add_foreign_key "match_performances", "users"
  add_foreign_key "player_profils", "users"
  add_foreign_key "pre_training_evaluations", "trainings"
  add_foreign_key "pre_training_evaluations", "users"
end
