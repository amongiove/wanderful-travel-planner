class PackingListItemSerializer
  include FastJsonapi::ObjectSerializer
  attributes :item
  belongs_to :trip, serializer: TripSerializer

end
