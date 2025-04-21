class RenameTrainingParticipationsToTrainingEvaluations < ActiveRecord::Migration[7.1]
  def change
    rename_table :training_participations, :training_evaluations
  end
end

