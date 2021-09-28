class Trip < ApplicationRecord
    has_many :user_trips
    has_many :users, through: :user_trips 
    has_many :flights
    has_many :accomodations
    has_many :events
end
