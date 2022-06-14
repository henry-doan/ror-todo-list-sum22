class List < ApplicationRecord

  validates :title, :desc, presence: true
  validates :title, uniqueness: true
end
