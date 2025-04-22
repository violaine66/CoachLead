class AddColumnToMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    add_column :match_performances, :commentaires, :text
  end
end
