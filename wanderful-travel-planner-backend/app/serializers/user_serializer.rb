class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email
  has_many :trips, serializer: TripSerializer
end
