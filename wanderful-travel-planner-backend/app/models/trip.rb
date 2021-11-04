class Trip < ApplicationRecord
    has_many :user_trips, dependent: :destroy
    has_many :users, through: :user_trips 
    has_many :flights, dependent: :destroy
    has_many :accommodations, dependent: :destroy
    has_many :events, dependent: :destroy
    has_many :packing_list_items, dependent: :destroy
    
    has_one_attached :image, dependent: :destroy

    validates :name, presence: true
    validates :location, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true

    has_one_attached :attachment

end
