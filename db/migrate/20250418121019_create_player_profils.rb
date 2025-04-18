class CreatePlayerProfils < ActiveRecord::Migration[7.1]
  def change
    create_table :player_profils do |t|
      t.integer :age
      t.string :job
      t.float :weight
      t.integer :children_count
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
