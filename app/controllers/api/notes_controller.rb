class Api::NotesController < ApplicationController
  before_action :set_todo
  before_action :set_note, only: [:show, :update, :destroy]

  def index
    render json: @todo.notes
  end

  def show
    render json: @note
  end

  def create
    @note = @todo.notes.new(note_params)
    if @note.save 
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @note.update(note_params)
      render json: @note
    else
      render json: { errors: @note.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @note.destroy
    render json: { message: 'Note Deleted' }
  end

  private 
    def note_params
      params.require(:note).permit(:subject, :body)
    end

    def set_todo
      @todo = Todo.find(params[:todo_id])
    end

    def set_note
      @note = @todo.notes.find(params[:id])
    end
end
