module Api
  module V1
    class ReviewsController < ActionController::Base
      protect_from_forgery with: :null_session

      def create
        review = poutine.reviews.new(review_params)
        if review.save
          render json: ReviewSerializer.new(review).serialized_json
        else
          render json: { error: review.errors.messages }, status: 422
        end
       
      end

      def destroy
        review = Review.find(params[:id])

        if review.destroy
          head :no_content
        else
          render json: { error: review.errors.messages }, status: 422
        end

      end

      private
      
      def poutine
        @poutine ||= Poutine.find(params[:poutine_id])
      end

      def review_params
        params.require(:review).permit(:title, :description, :score, :poutine_id)
      end

    end
  end
end
