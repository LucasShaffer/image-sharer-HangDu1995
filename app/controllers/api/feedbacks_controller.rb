module Api
  class FeedbacksController < ApplicationController
    def create
      render json: { message: 'Thanks for your feedback!' }, status: :ok
    end
  end
end
