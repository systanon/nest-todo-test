import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Patch,
  Delete,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  @Get()
  async findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Post()
  async create(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todoService.create(todoData);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() todoData: Partial<Todo>,
  ): Promise<Todo> {
    return this.todoService.update(+id, todoData);
  }

  @Patch(':id')
  async patch(
    @Param('id') id: string,
    @Body() todoData: Partial<Todo>,
  ): Promise<Todo> {
    return this.todoService.update(+id, todoData);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.todoService.delete(+id);
  }
}
