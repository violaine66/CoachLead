class CreatePreTrainingEvaluations < ActiveRecord::Migration[7.1]
  def change
    create_table :pre_training_evaluations do |t|
      t.boolean :present
      t.integer :cognitive_fatigue
      t.integer :physical_fatigue
      t.integer :mood
      t.references :user, null: false, foreign_key: true
      t.references :training, null: false, foreign_key: true

      t.timestamps
    end
  end
end
