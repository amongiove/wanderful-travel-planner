# TODO: start_date being saved as null -- why???

class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy]

    def index
        if logged_in?
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
