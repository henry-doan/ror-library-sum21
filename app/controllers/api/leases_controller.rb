class Api::LeasesController < ApplicationController
  before_action :set_checkout
  before_action :set_lease, only: [:show, :update, :destroy]

  def index
    render json: @checkout.leases
  end

  def show
    render json: @lease
  end

  def create 
    @lease = @checkout.leases.new(lease_params)
    if @lease.save
      render json: @lease
    else
      render json: { errors: @lease.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @lease.update(lease_params)
      render json: @lease
    else
      render json: { errors: @lease.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @lease.destroy
    render json: { message: "Lease deleted" }
  end

  def avalItems
    @items = Item.all - @checkout.items
    render json: @items
  end

  private 
    def set_checkout
      @checkout = Checkout.find(params[:checkout_id])
    end

    def set_lease
      @lease = @checkout.leases.find(params[:id])
    end

    def lease_params
      params.require(:lease).permit(:item_id)
    end

end
