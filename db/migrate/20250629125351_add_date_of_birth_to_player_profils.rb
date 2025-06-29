class AddDateOfBirthToPlayerProfils < ActiveRecord::Migration[7.1]
  def change
    unless column_exists?(:player_profils, :date_of_birth)
      add_column :player_profils, :date_of_birth, :date
    end
  end
end
