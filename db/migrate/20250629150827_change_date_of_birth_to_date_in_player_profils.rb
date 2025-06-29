class ChangeDateOfBirthToDateInPlayerProfils < ActiveRecord::Migration[7.1]
  def up
    change_column :player_profils, :date_of_birth, 'date USING CAST(date_of_birth AS date)'
  end

  def down
    change_column :player_profils, :date_of_birth, :string
  end
end
