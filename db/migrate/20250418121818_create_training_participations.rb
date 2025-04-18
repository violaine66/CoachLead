class CreateTrainingParticipations < ActiveRecord::Migration[7.1]
  def change
    create_table :training_participations do |t|
      t.boolean :present
      t.integer :cognitive_fatigue
      t.integer :physical_fatigue
      t.integer :mood
      t.integer :after_intensity
      t.integer :after_fatigue
      t.boolean :pleasure
      t.references :user, null: false, foreign_key: true
      t.references :training, null: false, foreign_key: true

      t.timestamps
    end
  end
end
