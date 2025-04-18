class AddNamesToPlayerProfils < ActiveRecord::Migration[7.1]
  def change
    add_column :player_profils, :first_name, :string
    add_column :player_profils, :last_name, :string
  end
end
