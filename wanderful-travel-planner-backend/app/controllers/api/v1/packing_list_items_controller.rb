class Api::V1::PackingListItemsController < ApplicationController
  def index
    if logged_in?
        packing_list_items = PackingListItem.all
        render json: PackingListItemSerializer.new(packing_list_items)
    else
        render json: {
          error: "You must be logged in to view a packing list."
        }
    end
  end

  def create
    item = PackingListItem.new(packing_list_item_params)
    if item.save
        render json: PackingListItemSerializer.new(item), status: :created
    else
        render json: { error: item.errors.full_messages[0] }, status: :not_acceptable
    end
  end
  
  def destroy
    item = PackingListItem.find(params[:id])

    if item
        item.destroy
        render json:  { data: "Item successfully deleted" }, status: :ok
    else
        render json: { error: "Item not found and not deleted" }, status: :unprocessable_entity
    end
  end

    private

  def packing_list_item_params
    params.require(:packing_list_item).permit(:item, :trip_id)
  end
end
