class FlightSerializer
  include FastJsonapi::ObjectSerializer
  attributes  :airline, :date_time
end
