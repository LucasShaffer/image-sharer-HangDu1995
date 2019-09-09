require 'test_helper'

class ImagesControllerTest < ActionDispatch::IntegrationTest
  test 'should get image submission form' do
    get new_image_url
    assert_response 200
  end

  test 'should not create when no link' do
    assert_no_difference 'Image.count' do
      post images_path, params: { image: { link: nil } }
    end

    assert_response 422
  end

  test 'should not create when non-valid link' do
    assert_no_difference 'Image.count' do
      post images_path, params: { image: { link: '123' } }
    end

    assert_response 422
  end

  test 'should create and show when valid link' do
    image_link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080'

    assert_difference 'Image.count', +1 do
      post images_path, params: { image: { link: image_link } }
    end

    assert_response 302
    follow_redirect!
    assert_response 200
    assert_select 'p', 'This is the image:'
    assert_select 'img' do
      assert_select '[src=?]', image_link
    end
  end
end
