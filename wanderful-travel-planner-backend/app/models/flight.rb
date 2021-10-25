class Flight < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  validates :airline, presence: true
  validates :date_time, presence: true
end
