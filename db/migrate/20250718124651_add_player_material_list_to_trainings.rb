class AddPlayerMaterialListToTrainings < ActiveRecord::Migration[7.1]
  def change
    add_column :trainings, :player_material_list, :text
  end
end
