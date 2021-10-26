class Api::V1::FlightsController < ApplicationController

    def index
        if logged_in?
            flights = current_user.flights
            render json: FlightSerializer.new(flights)
        else
            render json: {
              error: "You must be logged in to see flights"
            }
        end
    end

    # def create
    #     event = Event.new(event_params)
    #     if event.save
    #         render json: EventSerializer.new(event), status: :created
    #     else
    #         render json: { error: event.errors.full_messages[0] }, status: :not_acceptable
    #     end
    # end

    # def update
    #     event = Event.find(params[:id])

    #     if event.update(event_params)
    #       render json: EventSerializer.new(event), status: :ok
    #     else
    #       render json: { error: event.errors.full_messages[0] }, status: :not_acceptable
    #     end
    # end

    def destroy
        puts ('destroy')
        flight = Flight.find(params[:id])
        puts(flight)
        if flight
            flight.destroy
            render json:  { data: "Flight successfully destroyed" }, status: :ok
        else
            render json: { error: "Flight not found and not destroyed" }, status: :unprocessable_entity
        end
    end

    private

    def flight_params
      params.require(:flight).permit(:airline, :date_time, :user, :trip_id)
    end

end
