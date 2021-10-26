class Accomodation < ApplicationRecord
  belongs_to :user
  belongs_to :trip

  validates :location, presence: true
  validates :start_date_time, presence: true
  validates :end_date_time, presence: true

end
