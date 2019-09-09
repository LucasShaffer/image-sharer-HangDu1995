require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'should report error when no link' do
    image = Image.new
    assert_not image.save
    error = image.errors.details[:link][0][:error]
    assert_equal error, :blank
  end

  test 'should report error when non-valid link' do
    image_link = '123'
    image = Image.new(link: image_link)
    assert_not image.save
    error = image.errors.details[:link][0][:error]
    assert_equal error, :url
  end

  test 'should pass when valid link' do
    image_link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Pomeranian_01.jpg?bust=1538074638&width=290'
    image = Image.new(link: image_link)
    assert image.save
    n_error = image.errors.details[:link].length
    assert_equal n_error, 0
  end
end
