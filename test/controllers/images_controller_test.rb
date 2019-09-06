require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get image submission form' do
    get new_image_url
    assert_response 200
  end
end
