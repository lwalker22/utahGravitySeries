class Api::VenuesController < ApplicationController
end

def index
  render json: Venue.all
end

def create
  @venue = Venue.new(venue_params)
  if @venue.save
    render json: @venue
  else
    render json: { erros: @venue.errors }, status: unprocessable_entity
  end
end

def update
  @venue = Venue.find(params[:id])
  if @venue.update(venue_params)
    render json: @venue
  else
    render json: { errors: @venue.errors }, status: unprocessable_entiy
  end
end

def destroy
  Venue.find(params[:id]).destroy
  render json: { message: 'Venue Deleted' }
end

private
  def venue_params
    params.require(:diner).permit(:name, :address, :hours)
  end
end