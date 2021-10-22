class PostsController < ApplicationController
  skip_before_action :authorize, only: :index

  # GET all users' posts
  def index
    posts = Post.all.sort_by(&:created_at).reverse
    render json: posts, status: :ok
  end

  # GET /posts/1
  def show
    post = Post.find(params[:id])
    render json: post, status: :ok
  end

  # POST /posts
  def create
    post = @current_user.posts.create!(post_params)
    render json: post, status: :created
  end

  # PATCH/PUT /posts/1

  def update
    post = find_post
    post.update!(post_params)
    render json: post, status: :accepted
  end

  # DELETE /posts/1
  def destroy
    post = find_post
    post.destroy
    head :no_content
  end

  private

  def find_post
    post = @current_user.posts.find(params[:id])
  end

  def post_params
    params.permit(:text, :user_id)
  end
end
