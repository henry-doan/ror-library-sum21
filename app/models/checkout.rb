class Checkout < ApplicationRecord
  belongs_to :user
  has_many :books, dependent: :destroy
  has_many :mediaels, dependent: :destroy
end
