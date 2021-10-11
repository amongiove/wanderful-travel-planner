class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy]

    def index
        if logged_in?
            trips = current_user.trips
      
            render json: TripSerializer.new(trips)
        else
            render json: {
              error: "You must be logged in to see trips"
            }
        end
    end

    def show
        trip = Trip.find(params[:id])

        if trip
            render json: TripSerializer.new(trip), status: :ok
        else
            render json: { error: "Unable to locate trip" }, status: :not_found
        end
    end

    def create
        trip = Trip.new(trip_params)
        if trip.save
            UserTrip.create(user_id: current_user.id, trip_id: trip.id)
            render json: TripSerializer.new(trip), status: :created
        else
            render json: { error: trip.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def update
        trip = Trip.find(params[:id])

        if trip.update(trip_params)
          render json: TripSerializer.new(trip), status: :ok
        else
          render json: { error: trip.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def destroy
        trip = Trip.find(params[:id])
        
        if trip.destroy    
            render json:  { data: "Trip successfully destroyed" }, status: :ok
        else
            render json: { error: "Trip not found and not destroyed" }, status: :unprocessable_entity
        end
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :start_date, :end_date, :location)
    end

end
