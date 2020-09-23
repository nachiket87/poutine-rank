class ReviewSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :description, :score, :poutine_id
end
