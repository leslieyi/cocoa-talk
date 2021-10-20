class CommentsController < ApplicationController
  skip_before_action :authorize, only: :index

  def index
    comments = Comment.all
    render json: comments, status: :ok
  end

  def show
    comment = find_comment
    render json: comment, status: :ok
  end

  def create
    comment = Comment.create!(comment_params)
    render json: comment, status: :created
  end

  def update
    comment = Comment.update!(comment_params)
    render json: commen, status: :accepted
  end

  def destroy
    comment = find_comment
    comment.destroy
    head :no_content
  end

  private

  def find_comment
    Comment.find(params[:id])
  end

  def comment_params
    params.permit(:text, :user_id, :post_id)
  end
end