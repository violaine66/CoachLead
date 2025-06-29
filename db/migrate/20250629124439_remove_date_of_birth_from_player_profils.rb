class RemoveDateOfBirthFromPlayerProfils < ActiveRecord::Migration[7.1]
  def change
        remove_column :player_profils, :date_of_birth
  end
end
