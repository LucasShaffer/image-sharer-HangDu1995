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

  test 'should create and show when there are tags and valid link' do
    image_link = 'https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/09/dog-landing-hero-lg.jpg?bust=1536935129&width=1080'
    tags = %w[dog cute]

    assert_difference 'Image.count', +1 do
      post images_path, params: { image: { link: image_link, tag_list: tags.join(',') } }
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
    tag_list = 'dog'

    Image.create!(link: image_link1, tag_list: tag_list, created_at: Time.zone.now)
    Image.create!(link: image_link2, tag_list: tag_list, created_at: Time.zone.now + 1.hour)
    Image.create!(link: image_link3, tag_list: tag_list, created_at: Time.zone.now + 2.hours)

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

    image = Image.create!(link: image_link, tag_list: tags.join(','))
    image.reload

    get image_url(image)
    assert_response :ok
    assert_select '.js-tags' do
      assert_select '.js-tag' do |elements|
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

    get images_url
    assert_response :ok
    assert_select('.js-tags').first do
      assert_select '.js-tag' do |elements|
        assert_equal 2, elements.length
        assert_equal 'dog', elements[0].text
        assert_equal 'cute', elements[1].text
      end
    end
  end

  test 'should not save when no tags' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'

    assert_difference 'Image.count', 0 do
      post images_path, params: { image: { link: image_link } }
    end

    assert_response 422
    assert_select '.image_tag_list .error', 'You need to enter at least one tag'
  end

  test 'should not save when no tags and no link' do
    assert_difference 'Image.count', 0 do
      post images_path, params: { image: {link: nil, tag_list: nil} }
    end

    assert_response 422
    assert_select '.image_link .error', 'can\'t be blank'
    assert_select '.image_tag_list .error', 'You need to enter at least one tag'
  end

  test 'should keep tags when no link or non-valid link' do
    image_link = nil
    tags = %w[dog cute]

    post images_path, params: { image: { link: image_link, tag_list: tags.join(',') } }
    assert_response 422

    # tags should still be 'dog, cute' in the form field
    assert_select '.image_tag_list input' do
      assert_select '[value=?]', tags.join(', ')
    end

    image_link = '123'

    post images_path, params: { image: { link: image_link, tag_list: tags.join(',') } }
    assert_response 422

    # tags should still be 'dog, cute' in the form field
    assert_select '.image_tag_list input' do
      assert_select '[value=?]', tags.join(', ')
    end
  end

  test 'should display images with valid tag' do
    link1 = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    link2 = 'https://i.kinja-img.com/gawker-media/image/upload/s--Z_YUWgMx--/c_scale,f_auto,fl_progressive,q_80,w_800/etw5ahwcfttkqikxbfg3.jpg'
    link3 = 'https://www.humanesociety.org/sites/default/files/styles/400x400/public/2018/06/cat-217679.jpg?h=c4ed616d&itok=H0FcH69a'

    tag1 = 'dog'
    tag2 = 'cute'

    Image.create!(link: link1, tag_list: "#{tag1}, #{tag2}", created_at: Time.zone.now)
    Image.create!(link: link2, tag_list: "#{tag1},beautiful", created_at: Time.zone.now + 1.hour)
    Image.create!(link: link3, tag_list: "cat,#{tag2}", created_at: Time.zone.now + 2.hours)

    # images with tag1 'dog' should be link2 and link1 (in order)
    get images_url, params: { tag: tag1 }
    assert_response 200
    assert 'h1', 'Images with tag: ' + tag1
    assert_select 'img' do |elements|
      assert_equal 2, elements.length
      assert_equal link2, elements[0][:src]
      assert_equal link1, elements[1][:src]
    end

    # images with tag2 'cute' should be link3 and link1 (in order)
    get images_url, params: { tag: tag2 }
    assert_response 200
    assert 'h1', "Images with tag: #{tag2}"
    assert_select 'img' do |elements|
      assert_equal 2, elements.length
      assert_equal link3, elements[0][:src]
      assert_equal link1, elements[1][:src]
    end
  end

  test 'should be no image if this tag does not exist' do
    tag_no_record = 'whatever'
    get images_url, params: { tag: tag_no_record }
    assert_response 200
    assert_select 'h1', "Images with tag: #{tag_no_record}"
    assert_select 'img', 0
  end

  test 'should destroy image' do
    image_link = 'https://petlandstl.com/wp-content/themes/cosmick-petland-global/images/cta1-1.jpg'
    tag_list = 'dog'

    image = Image.create!(link: image_link, tag_list: tag_list)

    assert_difference 'Image.count', -1 do
      delete image_url(image)
      assert_response 302
    end
  end

  test 'should display all images when no tag provided' do
    get images_url, params: { tag: nil }
    assert_response 200
    assert_select 'img', Image.count
  end
end

# rubocop:enable Metrics/ClassLength
