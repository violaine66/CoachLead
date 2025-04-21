class CreateAfterTrainingEvaluations < ActiveRecord::Migration[7.1]
  def change
    create_table :after_training_evaluations do |t|
      t.integer :after_intensity
      t.integer :after_fatigue
      t.boolean :pleasure
      t.references :user, null: false, foreign_key: true
      t.references :training, null: false, foreign_key: true

      t.timestamps
    end
  end
end
