class AddNotesToAccomodations < ActiveRecord::Migration[6.1]
  def change
    add_column :accomodations, :notes, :text
  end
end
