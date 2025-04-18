class CreateMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    create_table :match_performances do |t|
      t.date :match_date
      t.boolean :played
      t.integer :yellow_card
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
