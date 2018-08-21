class ItemsController < ApplicationController
  skip_before_action :verify_authenticity_token

  # get index (all)
  def index
    render json: Item.all
  end

  # get one (by id)
  def show
    render json: Item.find(params["id"])
  end

  # create new item
  def create
    render json: Item.create(params["item"])
  end

  # delete item (by id)
  def delete
    render json: Item.delete(params["id"])
  end

  # update item (by id)
  def update
    render json: Item.update(params["id"], params["item"])
  end

end
