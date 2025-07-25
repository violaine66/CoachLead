class RemoveYellowCardFieldsFromMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    remove_column :match_performances, :yellow_card, :integer
    remove_column :match_performances, :yellow_card_reason, :string
  end
end
