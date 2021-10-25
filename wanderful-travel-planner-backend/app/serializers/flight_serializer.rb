class FlightSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :airline, :date_time, :starting_airport, :return_airport, :user_id, :trip_id
end
