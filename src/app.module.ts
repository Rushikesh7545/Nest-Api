import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
// import { CompanyController } from './company/company.controller';
// import { CompanyService } from './company/company.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
@Module({
  imports: [
    CompanyModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    })
  ],
  // controllers: [CompanyController],
  // providers: [CompanyService],
})
export class AppModule {}