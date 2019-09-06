require 'test_helper'

class ImageTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  test "should report error when no link" do
    image = Image.new
    assert_not image.save
  end

  test "should report error when non-valid link" do
    image = Image.new(link:'123')
    assert_not image.save
  end
end
