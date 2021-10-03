class User < ApplicationRecord
    has_secure_password

    has_many :user_trips
    has_many :trips, through: :user_trips 
    has_many :flights
    has_many :accomodations
    has_many :messages, foreign_key: :sender_id, class_name: "Message"

    validates :name, :email, :password, presence: true
    validates :email, uniqueness: { case_sensitive: false }
    validates :password, length: { in: 6..20 }

end
