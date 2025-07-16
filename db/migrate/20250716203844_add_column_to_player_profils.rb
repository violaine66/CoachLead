class AddColumnToPlayerProfils < ActiveRecord::Migration[7.1]
  def change
    add_column :player_profils, :vma, :float, null: true, default: nil
  end
end
