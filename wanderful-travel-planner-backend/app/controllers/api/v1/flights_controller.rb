class Api::V1::FlightsController < ApplicationController

    def index
        if logged_in?

            user_id = current_user.id
            flights = Flight.find_by(user_id: user_id)
      
            render json: FlightSerializer.new(flights)
        else
            render json: {
              error: "You must be logged in to see flights"
            }
        end
    end

    # def show
    #     # TODO: do i need this ??
    #     event = Event.find(params[:id])

    #     if event
    #         render json: EventSerializer.new(event), status: :ok
    #     else
    #         render json: { error: "Unable to locate event" }, status: :not_found
    #     end
    # end

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

    # def destroy
    #     event = Event.find(params[:id])

    #     if event
    #         event.destroy
    #         render json:  { data: "Event successfully destroyed" }, status: :ok
    #     else
    #         render json: { error: "Event not found and not destroyed" }, status: :unprocessable_entity
    #     end
    # end

    private

    def flight_params
      params.require(:flight).permit(:airline, :date_time, :user_id, :trip_id)
    end

end
