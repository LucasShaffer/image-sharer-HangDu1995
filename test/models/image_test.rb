require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  test 'should report error when no link' do
    image = Image.new
    assert_not image.save

    error_link = image.errors.details[:link][0][:error]
    error_tags = image.errors.details[:tag_list][0][:error]

    assert_equal :blank, error_link
    assert_equal 'You need to enter at least one tag', error_tags
  end

  test 'should report error when non-valid link' do
    image_link = '123'
    image = Image.new(link: image_link)

    assert_not image.save

    error_link = image.errors.details[:link][0][:error]
    error_tags = image.errors.details[:tag_list][0][:error]

    assert_equal :url, error_link
    assert_equal 'You need to enter at least one tag', error_tags
  end

  test 'should report error when no tag' do
    image_link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Pomeranian_01.jpg?bust=1538074638&width=290'
    image = Image.new(link: image_link)

    assert_not image.save

    error_tags = image.errors.details[:tag_list][0][:error]
    assert_equal 'You need to enter at least one tag', error_tags

    n_error_link = image.errors.details[:link].length
    assert_equal 0, n_error_link
  end

  test 'should pass when valid link and tags' do
    image_link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Pomeranian_01.jpg?bust=1538074638&width=290'
    tag_list = 'dog'
    image = Image.new(link: image_link, tag_list: tag_list)

    assert image.save

    n_error_link = image.errors.details[:link].length
    assert_equal 0, n_error_link

    n_error_tags = image.errors.details[:tags].length
    assert_equal 0, n_error_tags
  end

  test 'should have tags' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tags = %w[dog cute]

    image = Image.new(link: image_link, tag_list: tags.join(','))
    assert image.save
    assert_equal 'dog', Image.last.tag_list[0]
    assert_equal 'cute', Image.last.tag_list[1]
  end
end
