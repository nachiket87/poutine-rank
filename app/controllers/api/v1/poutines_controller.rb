module Api
  module V1
    class PoutinesController < ActionController::Base
      protect_from_forgery with: :null_session

      def index
        poutines = Poutine.all
        render json: PoutineSerializer.new(poutines, options).serialized_json
      end

      def show
        poutine = Poutine.find_by(slug: params[:slug])
        render json: PoutineSerializer.new(poutine, options).serialized_json
      end

      def create
        poutine = Poutine.new(poutine_params)
        if poutine.save
          render json: PoutineSerializer.new(poutine).serialized_json
        else
          render json: { error: poutine.errors.messages }, status: 422
        end
      end

      def update
        poutine = Poutine.find_by(slug: params[:slug])

        if poutine.update(poutine_params)
          render json: PoutineSerializer.new(poutine, options).serialized_json
        else
          render json: { error: poutine.errors.messages }, status: 422
        end
      end

      def destroy
        poutine = Poutine.find_by(slug: params[:slug])

        if poutine.destroy
          head :no_content
        else
          render json: { error: poutine.errors.messages }, status: 422
        end
      end

      private

      def poutine_params
        params.require(:poutine).permit(:name, :image_url)
      end

      def options
        @options ||= { include: %i[reviews] }
      end


    end
  end
end
