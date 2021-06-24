class Book < ApplicationRecord
  belongs_to :checkout, optional: true
end
