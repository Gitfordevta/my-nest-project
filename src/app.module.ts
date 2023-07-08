import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';

@Module({
  // imports: [
  //   MongooseModule.forRoot('mongodb+srv://shivamjhavj16:TNgLevjzCfa5867m@cluster0.ifnjnzc.mongodb.net/Cluster0?retryWrites=true&w=majority'),
  // ],
  imports: [CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
