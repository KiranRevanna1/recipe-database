import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipe.entity';
import { RecipeController } from './recipe.controller';
import { RecipeService } from './recipe.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Recipe]),
  ],
  controllers: [RecipeController],
  providers: [RecipeService],
  exports: [RecipeService], // Optional: If you want to export the RecipeService for dependency injection in other modules
})
export class RecipesModule {}
// recipe.model.ts
