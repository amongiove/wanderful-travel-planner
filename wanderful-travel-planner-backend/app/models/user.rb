class User < ApplicationRecord
    has_secure_password

    has_many :user_trips
    has_many :trips, through: :user_trips 
    has_many :flights
    has_many :accomodations
end
