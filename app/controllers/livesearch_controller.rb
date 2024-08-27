class LivesearchController < ApplicationController

  def index
    @results = search_for_projects
    respond_to do |format|
      format.turbo_stream do
        render turbo_stream: turbo_stream.update("projects", partial: "projects/project", collection: @results)
      end
    end
  end

  def suggestions
   @results = search_for_projects
   respond_to do |format|
    format.turbo_stream do
      render turbo_stream: turbo_stream.update("suggestions", partial: "livesearch/suggestion", locals: {results: @results})
    end
  end
    end

    private

    def search_for_projects
      if params[:query].present?
        Project.where("name ILIKE ?", "%#{params[:query]}%")
      else
        Project.all
      end
    end
  end
