import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Recipe> {
    return this.recipeService.findOne(+id);
  }

  @Post()
  async create(@Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    return this.recipeService.create(recipeData);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() recipeData: Partial<Recipe>): Promise<Recipe> {
    return this.recipeService.update(+id, recipeData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.recipeService.remove(+id);
  }
}
