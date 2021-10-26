class Flight < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  validates :airline, presence: true
  validates :date_time, presence: true
  validates :starting_airport, presence: true
  validates :return_airport, presence: true

end
