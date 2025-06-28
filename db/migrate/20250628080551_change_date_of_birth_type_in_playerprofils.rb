class ChangeDateOfBirthTypeInPlayerprofils < ActiveRecord::Migration[7.1]
  def change
    change_column :player_profils, :date_of_birth, :date, using: 'date_of_birth::date'
  end
end
