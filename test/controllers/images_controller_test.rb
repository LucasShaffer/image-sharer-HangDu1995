require 'test_helper'
# rubocop:disable Metrics/ClassLength

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

  test 'should get image index page' do
    get images_url
    assert_response 200
  end

  test 'new images should be added on top of others' do
    image_link1 = 'https://livewire.org.au/wp-content/uploads/2018/09/akita.jpg'
    image_link2 = 'https://www.rspcansw.org.au/wp-content/uploads/2017/08/50_a-feature_dogs-and-puppies_mobile.jpg'
    image_link3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDhmZymtEItPYX5IqZXFqW_hMHFk5OOMqAnLKSipgHidR6XNtwrw'

    Image.create!(link: image_link1, created_at: Time.zone.now)
    Image.create!(link: image_link2, created_at: Time.zone.now + 1.hour)
    Image.create!(link: image_link3, created_at: Time.zone.now + 2.hours)

    get images_url
    assert_response 200
    assert_select 'img' do |element|
      assert_equal image_link3, element[0][:src]
      assert_equal image_link2, element[1][:src]
      assert_equal image_link1, element[2][:src]
    end
  end

  test 'should display tags on show page' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tags = %w[dog cute]

    post images_path, params: { image: { link: image_link, tag_list: tags.join(',') } }
    follow_redirect!

    # tags should show on 'show' page for the image
    assert_select '.tags' do
      assert_select '.tag' do |elements|
        assert_equal 2, elements.length
        assert_equal 'dog', elements[0].text
        assert_equal 'cute', elements[1].text
      end
    end
  end

  test 'should display tags on index page' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tags = %w[dog cute]

    Image.create!(link: image_link, tag_list: tags.join(','))

    # tags also show on 'index' page for all images
    get images_url
    assert_select('.tags').first do
      assert_select '.tag' do |elements|
        assert_equal 2, elements.length
        assert_equal 'dog', elements[0].text
        assert_equal 'cute', elements[1].text
      end
    end

    # tags also show on 'index' page for all images
    get images_url
    assert_select('.tags').first do
      assert_select '.tag' do |elements|
        assert_equal 2, elements.length
        assert_equal 'dog', elements[0].text
        assert_equal 'cute', elements[1].text
      end
    end
  end

  test 'should display None when no tags' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    no_tag = nil

    post images_path, params: { image: { link: image_link, tag_list: no_tag } }
    follow_redirect!

    # should be 'None' on 'show' page for the image
    assert_select '.tags' do
      assert_select '.tag' do |elements|
        assert_equal 1, elements.length
        assert_equal 'None', elements[0].text
      end
    end
  end

  test 'should display None on show page when no tags' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    no_tag = nil

    post images_path, params: { image: { link: image_link, tag_list: no_tag } }
    follow_redirect!

    # should be 'None' on 'show' page for the image
    assert_select '.tags' do
      assert_select '.tag' do |elements|
        assert_equal 1, elements.length
        assert_equal 'None', elements[0].text
      end
    end
  end

  test 'should display None on index page when no tags ' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    no_tag = nil

    Image.create!(link: image_link, tag_list: no_tag)

    # should be 'None' on 'index' page for all images
    get images_url
    assert_select('.tags').first do
      assert_select '.tag' do |elements|
        assert_equal 1, elements.length
        assert_equal 'None', elements[0].text
      end
    end
  end

  test 'should keep tags when no link or non-valid link' do
    image_link = nil
    tags = %w[dog cute]

    post images_path, params: { image: { link: image_link, tag_list: tags.join(',') } }
    assert_response 422

    # tags should still be 'dog, cute'
    assert_select '.js-tag-list input' do
      assert_select '[value=?]', tags.join(', ')
    end
  end
end

# rubocop:enable Metrics/ClassLength
