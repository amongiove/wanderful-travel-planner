class TripSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :location, :start_date, :end_date, :image

  def image
    rails_blob_path(object.image, only_path: true) if object.image.attached?
  end

end
