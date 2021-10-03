class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :email, :password_digest
  has_many :trips, serializer: TripSerializer
end
