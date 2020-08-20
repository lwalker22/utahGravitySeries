class Api::ResultsController < ApplicationController
  before_action :set_venue

  def index
    render json: @venue.results
  end

  def create
    @result = @venue.results.new(result_params)
    if @result.save
      render json: @results
    else
      render json: { errors: @result.errors }, status: :unprocessable_entity
    end
  end

  def update
    @result = @venue.results.find(params[:id])
    if @result.update(result_params)
      render json: @result
    else 
      render json: { errors: @result.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @venue.results.find(params[:id]).destroy
    render json: { message: 'result deleted' }
  end

  private
    def result_params
      params.require(:result).permit(:year)
    end
    def set_venue
      @venue = Venue.find(params[:venue_id])
    end
end
