class Todo < ApplicationRecord
  belongs_to :list

  validates :title, :rating, :price, presence: true 
  validates :rating, numericality: { only_integer: true }
  validates :rating, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 1 }
  validates :rating, numericality: { only_float: true }

  validates :complete, inclusion: {
    in: [true, false],
      message: "Not a boolean"
  }
end
