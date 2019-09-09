class Image < ApplicationRecord
  validates :link,
            presence: true,
            url: {
              allow_blank: true
            }
end
