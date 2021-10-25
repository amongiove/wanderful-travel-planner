class AddStartingAndReturningAirportsToFlights < ActiveRecord::Migration[6.1]
  def change
    add_column :flights, :starting_airport, :string
    add_column :flights, :return_airport, :string
  end
end
