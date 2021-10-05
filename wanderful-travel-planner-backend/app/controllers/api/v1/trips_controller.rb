class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy]

    def index
        puts "get trips"
        if logged_in?
            puts"logged in"
            puts current_user
            @trips = current_user.trips
      
            render json: TripSerializer.new(@trips)
        else
            render json: {
              error: "You must be logged in to see trips"
            }
        end
    end

    def show
        render json: TripSerializer.new(@trip).serialized_json
    end

    private

    def set_trip
        @trip = Trip.find(params[:id])
    end

    def trip_params
      params.require(:trip).permit(:name, :start_date, :end_date, :location)
    end

end
