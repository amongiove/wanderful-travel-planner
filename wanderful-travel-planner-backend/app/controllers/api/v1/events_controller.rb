class Api::V1::EventsController < ApplicationController
    before_action :set_event, only: [:show, :update, :destroy]

    def index
        if logged_in?
            trip = Trip.find(params[:id])
            events = trip.events
      
            render json: EventSerializer.new(events)
        else
            render json: {
              error: "You must be logged in to see events"
            }
        end
    end

    # def show
    #     trip = Trip.find(params[:id])

    #     if trip
    #         render json: TripSerializer.new(trip), status: :ok
    #     else
    #         render json: { error: "Unable to locate trip" }, status: :not_found
    #     end
    # end

    def create
        event = Event.new(event_params)
        if event.save
            render json: EventSerializer.new(event), status: :created
        else
            render json: { error: event.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    # def update
    #     trip = Trip.find(params[:id])

    #     if trip.update(trip_params)
    #       render json: TripSerializer.new(trip), status: :ok
    #     else
    #       render json: { error: trip.errors.full_messages[0] }, status: :not_acceptable
    #     end
    # end

    # def destroy
    #     trip = Trip.find(params[:id])
    #     userTrip = UserTrip.find_by(user: current_user, trip: trip)

    #     if trip && userTrip
    #         # TODO: will need to add deletions as build out association functionalities
    #         userTrip.destroy
    #         trip.destroy
    #         render json:  { data: "Trip successfully destroyed" }, status: :ok
    #     else
    #         render json: { error: "Trip not found and not destroyed" }, status: :unprocessable_entity
    #     end
    # end

    private

    # def set_trip
    #     @event = Event.find(params[:id])
    # end

    def event_params
      params.require(:event).permit(:event_name, :location, :event_date_time, :notes, :trip_id)
    end

end
