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

    def create
        flight = Flight.new(flight_params)
        if flight.save
            render json: FlightSerializer.new(flight), status: :created
        else
            render json: { error: flight.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def update
        flight = Flight.find(params[:id])

        if flight.update(flight_params)
          render json: FlightSerializer.new(flight), status: :ok
        else
          render json: { error: flight.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def destroy
        flight = Flight.find(params[:id])
        if flight
            flight.destroy
            render json:  { data: "Flight successfully destroyed" }, status: :ok
        else
            render json: { error: "Flight not found and not destroyed" }, status: :unprocessable_entity
        end
    end

    private

    def flight_params
      params.require(:flight).permit(:airline, :date_time, :starting_airport, :return_airport, :user_id, :trip_id)
    end

end
