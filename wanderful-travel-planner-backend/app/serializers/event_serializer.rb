class EventSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :event_date_time, :notes
  # belongs_to :trip, serializer: TripSerializer
end
