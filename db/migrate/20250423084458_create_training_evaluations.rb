class CreateTrainingEvaluations < ActiveRecord::Migration[7.1]
  def change
    create_table :training_evaluations do |t|
      t.timestamps
    end
  end
end
