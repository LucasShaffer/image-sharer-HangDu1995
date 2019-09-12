class Image < ApplicationRecord
  acts_as_taggable_on :tags
  validates :link,
            presence: true,
            url: {
              allow_blank: true
            }
  validate :tag_list_presence

  private

  def tag_list_presence
    errors.add(:tag_list, 'You need to enter at least one tag') if tag_list.length == 0
  end
end
