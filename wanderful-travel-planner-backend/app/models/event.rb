class Event < ApplicationRecord
  belongs_to :trip

  validates :event_name, presence: true
  validates :location, presence: true
  validates :event_date_time, presence: true
end
