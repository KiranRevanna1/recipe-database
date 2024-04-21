import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecipesModule } from './recipes/recipe.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // Specify the database type
      host: 'localhost', // Specify the database host
      port: 5432, // Specify the database port
      username: 'KiranRevanna',
      password: 'adde252b-2e02-4920-853b-db81930a247e', // Specify the database password
      database: 'recipes', // Specify the database name
      autoLoadEntities: true, // Automatically load entity files
      synchronize: true, // Automatically synchronize database schema with entities
    }),
    RecipesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
