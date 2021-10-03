class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date
end
