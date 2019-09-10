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

  test 'should have tags' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tags = %w[dog cute]

    image = Image.new(link: image_link, tag_list: tags.join(','))
    assert image.save
    assert_equal 'dog', Image.last.tag_list[0]
    assert_equal 'cute', Image.last.tag_list[1]
  end

  test 'should have no tag' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tags = nil

    image = Image.new(link: image_link, tag_list: tags)
    assert image.save
    assert_equal 0, Image.last.tag_list.length
  end
end
