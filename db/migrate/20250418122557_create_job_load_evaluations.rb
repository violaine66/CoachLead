class CreateJobLoadEvaluations < ActiveRecord::Migration[7.1]
  def change
    create_table :job_load_evaluations do |t|
      t.string :period
      t.integer :rating
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
