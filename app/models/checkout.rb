class Checkout < ApplicationRecord
  belongs_to :user
  has_many :leases, dependent: :destroy
  has_many :items, through: :leases
end
