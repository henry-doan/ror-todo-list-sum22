class List < ApplicationRecord
  has_many :todos, dependent: :destroy

  validates :title, :desc, presence: true
  validates :title, uniqueness: true
end
