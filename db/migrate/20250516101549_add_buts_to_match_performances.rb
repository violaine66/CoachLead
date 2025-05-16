class AddButsToMatchPerformances < ActiveRecord::Migration[7.1]
  def change
     add_column :match_performances, :buts, :integer, default: 0
  end
end
