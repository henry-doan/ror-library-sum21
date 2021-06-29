class Item < ApplicationRecord
  has_many :leases, dependent: :destroy
  has_many :checkouts, through: :leases
end
