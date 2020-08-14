class Api::VenuesController < ApplicationController
end

def index
  render json: Venue.all
end

def show
  render json: @venue
end

def create
  venue = Venue.new(venue_params)
  if venue.save
    render json: venue
  else
    render json: venue.errors, status: 422
  end
end

def update
  if @venue.update(venue_params)
    render json: @venue
  else
    render json: @venue.errors, status: 422
  end
end

def destroy
  @venue.destroy
end

private
  def set_venue
    @venue = Venue.find(params[:id])
  end

  def venue_params
    params.require(:product).permit(:name, :location)
  end
end