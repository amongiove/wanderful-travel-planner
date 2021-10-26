class AccomodationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :location, :start_date_time, :end_date_time, :user_id, :trip_id
end
