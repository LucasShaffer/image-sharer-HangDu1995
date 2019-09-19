class ImagesController < ApplicationController
  def index
    @tag = params[:tag]
    @images = if @tag.present?
                Image.tagged_with(@tag).order(created_at: :desc)
              else
                Image.order(created_at: :desc).all
              end
  end

  def show
    @image = Image.find(params[:id])
  end

  def new
    @image = Image.new
  end

  def edit
    @image = Image.find(params[:id])
  end

  def create
    @image = Image.new(image_params)

    if @image.save
      flash[:success] = 'You have successfully added an image.'
      redirect_to @image
    else
      render 'new', status: 422
    end
  end

  def update
    @image = Image.find(params[:id])

    if @image.update(image_params)
      redirect_to @image
    else
      render 'edit', status: 422
    end
  end

  def destroy
    @image = Image.find(params[:id])
    @image.destroy!
    flash[:success] = 'You have successfully deleted the image.'

    redirect_to images_path
  end

  private

  def image_params
    params.require(:image).permit(:link, :tag_list)
  end
end
