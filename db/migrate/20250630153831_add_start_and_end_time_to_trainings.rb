class AddStartAndEndTimeToTrainings < ActiveRecord::Migration[7.1]
  def change
    add_column :trainings, :start_time, :time
    add_column :trainings, :end_time, :time
  end
end
