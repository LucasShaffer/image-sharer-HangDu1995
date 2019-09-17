module PageObjects
  module Extensions
    module ElementInlineErrorMessage
      def error_message
        parent = find_parent

        Capybara.using_wait_time(0) do
          parent.find('.error').text
        rescue Capybara::ElementNotFound
          ''
        end
      end

      private

      def find_parent
        node.find(:xpath, "ancestor::*[contains(concat(' ',normalize-space(@class), ' '),' field_with_errors ')][1]")
      end
    end
  end
end
