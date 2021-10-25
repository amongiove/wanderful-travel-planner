class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date

  # attribute :events do |trip|
  #   trip.events.map do |event|
  #     {
  #       id: event.id,
  #       event_name: event.event_name,
  #       location: event.location,
  #       event_date_time: event.event_date_time,
  #       notes: event.notes
  #     }
  #   end
  # end

  # attribute :packing_list_items do |trip|
  #   trip.packing_list_items.map do |list_item|
  #     {
  #       id: list_item.id,
  #       name: list_item.item
  #     }
  #   end
  # end

  # attribute :flights do |trip|
  #   trip.flights.map do |flight|
  #     {
  #       user_id: flight.user_id,
  #       id: flight.id,
  #       airline: flight.airline,
  #       date_time: flight.date_time,
  #       starting_airport: flight.starting_airport,
  #       return_airport: flight.return_airport
  #     }
  #   end
  # end

  attribute :image_url do |trip, params|
    params[:image_url]
  end
 
end
