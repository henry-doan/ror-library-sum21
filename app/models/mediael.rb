class Mediael < ApplicationRecord
  belongs_to :checkout, optional: true
end
