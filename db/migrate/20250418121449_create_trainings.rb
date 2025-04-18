class CreateTrainings < ActiveRecord::Migration[7.1]
  def change
    create_table :trainings do |t|
      t.date :date
      t.string :location
      t.string :title
      t.text :description

      t.timestamps
    end
  end
end
