class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.references :trip, null: false, foreign_key: true
      t.string :event_name
      t.string :location
      t.datetime :event_date_time
      t.text :notes

      t.timestamps
    end
  end
end
