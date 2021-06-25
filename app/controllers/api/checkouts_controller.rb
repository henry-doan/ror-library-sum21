class Api::CheckoutsController < ApplicationController
  # make make sure the user is login
  before_action :set_checkout, only: [:show, :update, :destroy]

  def index
    render json: current_user.checkouts 
  end

  def show
    render json: @checkout
  end

  def create 
    @checkout = current_user.checkouts.new(checkout_params)
    if @checkout.save 
      render json: @checkout
    else
      render json: { errors: @checkout.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @checkout.update(checkout_params)
      render json: @checkout
    else
      render json: { errors: @checkout.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @checkout.destroy
    render json: { message: "Check out deleted" }
  end

  private 
    def checkout_params
      params.require(:checkout).permit(:checkout_date, :return_date, :fees)
    end

    def set_checkout
      @checkout = current_user.checkouts.find(params[:id])
    end
end
