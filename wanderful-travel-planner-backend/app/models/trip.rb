class Trip < ApplicationRecord
    # include ActiveModel::Serializers::JSON

    has_many :user_trips
    has_many :users, through: :user_trips 
    has_many :flights
    has_many :accomodations
    has_many :events
    has_many :packing_list_items
    has_many :messages
    
    has_one_attached :image

    validates :name, presence: true
    validates :location, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true

    has_one_attached :attachment
  
    # def attributes
    #   {
    #     'image_url' => nil
    #   }
    # end
  
    # def image_url
    #   Rails.application.routes.url_helpers.rails_representation_url(
    #     image.variant(resize_to_limit: [200, 200].processed, only_path: true)
    #   )
    # end

end
