class ChangeDateOfBirthTypeInPlayerProfils < ActiveRecord::Migration[7.1]
    def up
    change_column :player_profils, :date_of_birth, :string
  end

  def down
    change_column :player_profils, :date_of_birth, :date
  end
end
