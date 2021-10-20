class Api::V1::EventsController < ApplicationController
    # before_action :set_event, only: [:show, :update, :destroy]

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

    def show
        puts("inside show")
        event = Event.find(params[:id])

        if event
            puts ("got event")
            render json: EventSerializer.new(event), status: :ok
        else
            render json: { error: "Unable to locate event" }, status: :not_found
        end
    end

    def create
        event = Event.new(event_params)
        if event.save
            render json: EventSerializer.new(event), status: :created
        else
            render json: { error: event.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def update
        puts ("update method")
        puts params
        # event = Event.find(params[:id])

        # if event.update(event_params)
        #   render json: EventSerializer.new(event), status: :ok
        # else
        #   render json: { error: event.errors.full_messages[0] }, status: :not_acceptable
        # end
    end

    def destroy
        event = Event.find(params[:id])

        if event
            event.destroy
            render json:  { data: "Event successfully destroyed" }, status: :ok
        else
            render json: { error: "Event not found and not destroyed" }, status: :unprocessable_entity
        end
    end

    private

    # def set_trip
    #     @event = Event.find(params[:id])
    # end

    def event_params
      params.require(:event).permit(:event_name, :location, :event_date_time, :notes, :trip_id)
    end

end
