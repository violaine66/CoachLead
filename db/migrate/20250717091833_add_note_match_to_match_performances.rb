class AddNoteMatchToMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    add_column :match_performances, :note_match, :float, null: true
  end
end
