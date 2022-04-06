require "test_helper"

class VueApplicationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get vue_application_index_url
    assert_response :success
  end
end
