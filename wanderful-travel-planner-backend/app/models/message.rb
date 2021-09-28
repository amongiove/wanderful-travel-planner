class Message < ApplicationRecord
  belongs_to :trip
  belongs_to :sender, foreign_key: :sender_id, class_name: "User"

end
