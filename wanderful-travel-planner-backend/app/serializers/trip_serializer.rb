class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date, :image
  # has_many :events, serializer: EventSerializer
  attribute :events do |trip|
    trip.events.map do |event|
      {
        id: event.id,
        event_name: event.event_name,
        location: event.location,
        event_date_time: event.event_date_time,
        notes: event.notes
      }
    end
  end

  # def image
  #   rails_blob_path(object.image, only_path: true) if object.image.attached?
  # end

end
