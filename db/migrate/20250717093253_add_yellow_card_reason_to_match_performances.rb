class AddYellowCardReasonToMatchPerformances < ActiveRecord::Migration[7.1]
  def change
    add_column :match_performances, :yellow_card_reason, :string, null: true
  end
end
