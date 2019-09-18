module PageObjects
  module Images
    class NewPage < PageObjects::Document
      path :new_image
      path :images # from a failed creation

      form_for :image do
        element :link
        element :tag_list
      end

      def create_image!(url: nil, tags: nil)
        link.set(url) if url.present?
        tag_list.set(tags) if tags.present?
        node.click_button('Create Image')
        window.change_to(ShowPage, NewPage)
      end
    end
  end
end
