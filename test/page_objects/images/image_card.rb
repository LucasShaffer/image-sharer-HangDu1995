module PageObjects
  module Images
    class ImageCard < AePageObjects::Element
      def url
        node.find('img')[:src]
      end

      def tags
        node.all('.js-tag').map(&:text)
      end

      def click_tag!(tag_name)
        path = ".//a[@href='/images?tag=#{tag_name}']"
        node.find(:xpath, path).click
        window.change_to(IndexPage)
      end
    end
  end
end
