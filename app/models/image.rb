class Image < ApplicationRecord
  acts_as_taggable_on :tags
  validates :link,
            presence: true,
            url: {
              allow_blank: true
            }
end
