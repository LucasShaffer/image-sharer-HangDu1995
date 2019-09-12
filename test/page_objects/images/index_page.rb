require 'flow_test_helper'

module PageObjects
  module Images
    class IndexPage < PageObjects::Document
      path :images

      collection :images, locator: '#image_list', item_locator: '#image_card', contains: ImageCard do
        def view!
          node.click_on('Show')
          window.change_to(ShowPage)
        end
      end

      def add_new_image!
        node.click_on('New Image')
        window.change_to(NewPage)
      end

      def showing_image?(url:, tags: nil)
        images.any? do |image|
          result = image.url == url
          tags.present? ? (result && image.tags == tags) : result
        end
      end

      def clear_tag_filter!
        node.click_on('Back')
        window.change_to(IndexPage)
      end
    end
  end
end
