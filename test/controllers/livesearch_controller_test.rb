require "test_helper"

class LivesearchControllerTest < ActionDispatch::IntegrationTest
  test "should get search" do
    get livesearch_search_url
    assert_response :success
  end
end
