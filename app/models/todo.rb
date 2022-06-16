class Todo < ApplicationRecord
  belongs_to :list
  has_many :notes, dependent: :destroy
  
  validates :title, :rating, :price, presence: true 
  validates :rating, numericality: { only_integer: true }
  validates :rating, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 1 }
  validates :price, numericality: { only_float: true }

  validates :complete, inclusion: {
    in: [true, false],
      message: "Not a boolean"
  }
end
