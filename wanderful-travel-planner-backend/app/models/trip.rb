class Trip < ApplicationRecord
    has_many :user_trips
    has_many :users, through: :user_trips 
    has_many :flights
    has_many :accomodations
    has_many :events
    has_many :packing_list_items
    has_many :messages

    validates :name, presence: true
    validates :location, presence: true
    validates :start_date, presence: true
    validates :end_date, presence: true

end
