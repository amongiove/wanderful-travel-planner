class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date, :image

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

  attribute :packing_list_items do |trip|
    trip.packing_list_items.map do |list_item|
      {
        id: list_item.id,
        name: list_item.item
      }
    end
  end
  # def image
  #   rails_blob_path(object.image, only_path: true) if object.image.attached?
  # end

end
