class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date

  attribute :image_url do |trip, params|
    params[:image_url]
  end

end
