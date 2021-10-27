class ChangeAccomodationsToAccommodations < ActiveRecord::Migration[6.1]
  def change
    rename_table :accomodations, :accommodations
  end
end
