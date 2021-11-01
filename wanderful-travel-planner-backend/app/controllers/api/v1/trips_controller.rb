class Api::V1::TripsController < ApplicationController
    before_action :set_trip, only: [:show, :update, :destroy]
    wrap_parameters :trip, include: [:name, :start_date, :end_date, :location, :image]

    def index
        if logged_in?
            trips = current_user.trips

            tripsCollection = []

            for trip in trips
                tripJson = trip.as_json
                tripJson[:attributes] = trip.as_json

                if trip.image.attached?
                    tripJson[:image] = true
                    tripJson[:attributes][:image_url] = url_for(trip.image)
                end

                tripsCollection.push(tripJson)
            end

            tripsHash = {:data => tripsCollection}
            render json: tripsHash
        else
            render json: {
              error: "You must be logged in to see trips"
            }
        end
    end

    def show
        trip = Trip.find(params[:id])

        if trip
            imageUrl = nil
            if trip.image.attached?
                imageUrl = url_for(trip.image)
            end
            render json: TripSerializer.new(trip, {params: {image_url: imageUrl}}), status: :ok
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
        userTrip = UserTrip.find_by(user: current_user, trip: trip)

        if trip && userTrip
            # TODO: will need to add deletions as build out association functionalities
            userTrip.destroy
            trip.destroy
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
      params.require(:trip).permit(:name, :start_date, :end_date, :location, :image)
    end

end
