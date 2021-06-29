class Lease < ApplicationRecord
  belongs_to :checkout
  belongs_to :item
end
