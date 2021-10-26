class Api::V1::AccomodationsController < ApplicationController

    def index
        if logged_in?
            accomodations = current_user.accomodations
            render json: AccomodationSerializer.new(accomodations)
        else
            render json: {
              error: "You must be logged in to see accomodations"
            }
        end
    end

    def create
        accomodation = Accomodation.new(accomodation_params)
        if accomodation.save
            render json: AccomodationSerializer.new(accomodation), status: :created
        else
            render json: { error: accomodation.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    def update
        accomodation = Accomodation.find(params[:id])

        if accomodation.update(accomodation_params)
          render json: AccomodationSerializer.new(accomodation), status: :ok
        else
          render json: { error: accomodation.errors.full_messages[0] }, status: :not_acceptable
        end
    end

    # def destroy
    #     flight = Flight.find(params[:id])
    #     if flight
    #         flight.destroy
    #         render json:  { data: "Flight successfully destroyed" }, status: :ok
    #     else
    #         render json: { error: "Flight not found and not destroyed" }, status: :unprocessable_entity
    #     end
    # end

    private

    def accomodation_params
      params.require(:accomodation).permit(:location, :start_date_time, :end_date_time, :notes, :user_id, :trip_id)
    end

end
