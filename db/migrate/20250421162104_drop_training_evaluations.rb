class DropTrainingEvaluations < ActiveRecord::Migration[7.1]
  def change
    drop_table :training_evaluations
  end
end
