module PageObjects
  module Images
    class ShowPage < PageObjects::Document
      path :image

      collection :tag_elements, locator: '.js-tags', item_locator: 'js-tag'

      def image_url
        node.find('img')[:src]
      end

      def tags
        node.all('.js-tag').map(&:text)
      end

      def delete
        node.click_on('Destroy')
        yield node.driver.browser.switch_to.alert
      end

      def delete_and_confirm!
        node.click_on('Destroy')
        node.driver.browser.switch_to.alert.accept
        window.change_to(IndexPage)
      end

      def go_back_to_index!
        node.click_on('Back')
        window.change_to(IndexPage)
      end
    end
  end
end
