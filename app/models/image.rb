class Image < ApplicationRecord
  validates :link, url: true
end

