class AddPassesToMatchsPerformances < ActiveRecord::Migration[7.1]
  def change
    add_column :match_performances, :passes, :integer, default: 0
  end
end
