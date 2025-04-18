class AddNamesToPlayerProfiles < ActiveRecord::Migration[7.1]
  def change
    add_column :player_profiles, :first_name, :string
    add_column :player_profiles, :last_name, :string
  end
end
