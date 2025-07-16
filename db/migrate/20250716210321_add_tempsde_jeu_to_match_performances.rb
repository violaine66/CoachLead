class AddTempsdeJeuToMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    add_column :match_performances, :tempsde_jeu, :integer, null: true, default: 0
  end
end
