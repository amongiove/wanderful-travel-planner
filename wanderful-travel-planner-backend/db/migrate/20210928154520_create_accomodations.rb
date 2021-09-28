class CreateAccomodations < ActiveRecord::Migration[6.1]
  def change
    create_table :accomodations do |t|
      t.references :user, null: false, foreign_key: true
      t.references :trip, null: false, foreign_key: true
      t.string :location
      t.datetime :start_date_time
      t.datetime :end_date_time

      t.timestamps
    end
  end
end
