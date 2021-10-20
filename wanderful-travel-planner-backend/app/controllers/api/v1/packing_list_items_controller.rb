class Api::V1::PackingListItemsController < ApplicationController
    def index
        if logged_in?
            puts('index method')
            trip = Trip.find(params[:id])
            packing_list_items = trip.packing_list_items
      
            render json: PackingListItemSerializer.new(packing_list_items)
        else
            render json: {
              error: "You must be logged in to view a packing list."
            }
        end
    end

    private

    def packing_list_item_params
      params.require(:packing_list_item).permit(:item, :trip_id)
    end
end
