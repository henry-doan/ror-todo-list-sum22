class Api::TodosController < ApplicationController
  before_action :set_list
  before_action :set_todo, only: [:show, :update, :destroy]

  def index
    render json: @list.todos
  end

  def show
    render json: @todo
  end

  def create
    @todo = @list.todos.new(todo_params)
    if @todo.save
      render json: @todo
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def update
    if @todo.update(todo_params)
      render json: @todo 
    else
      render json: { errors: @todo.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @todo.destroy
    render json: { messsage: 'Todo deleted'}
  end

  private 
    def todo_params 
      params.require(:todo).permit(:title, :complete, :rating, :price)
    end

    def set_list 
      @list = List.find(params[:list_id])
    end

    def set_todo 
      @todo = @list.todos.find(params[:id])
    end
end
