class AddDateOfBirthToPlayerProfils < ActiveRecord::Migration[7.1]
  def change
    add_column :player_profils, :date_of_birth, :date
  end
end
