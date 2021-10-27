class Api::V1::AccommodationsController < ApplicationController

    def index
        if logged_in?
            accommodations = current_user.accommodations
            render json: AccommodationSerializer.new(accommodations)
        else
            render json: {
              error: "You must be logged in to see accommodations"
            }
        end
    end

    def create
        accommodation = Accommodation.new(accommodation_params)
        if accommodation.save
            render json: AccommodationSerializer.new(accommodation), status: :created
        else
            render json: { error: accommodation.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def update
        accommodation = Accommodation.find(params[:id])

        if accommodation.update(accommodation_params)
          render json: AccommodationSerializer.new(accommodation), status: :ok
        else
          render json: { error: accommodation.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def destroy
        accommodation = Accommodation.find(params[:id])
        if accommodation
            accommodation.destroy
            render json:  { data: "Accommodation successfully destroyed" }, status: :ok
        else
            render json: { error: "Accommodation not found and not destroyed" }, status: :unprocessable_entity
        end
    end

    private

    def accommodation_params
      params.require(:accommodation).permit(:location, :start_date_time, :end_date_time, :notes, :user_id, :trip_id)
    end

end
