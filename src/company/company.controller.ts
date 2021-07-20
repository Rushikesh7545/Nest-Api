import { Controller,Get, Param } from '@nestjs/common';
import {CompanyService} from './company.service';
import { Company } from './company.entity';
@Controller('company')
export class CompanyController {

    constructor(private CompanyService: CompanyService){}
    @Get()
    findAll(): Promise<Company[]> {
      return this.CompanyService.findAll();
    }
}

// import { Controller, Get } from '@nestjs/common';
// import { PhotoService } from './photo.service';
// import { Photo } from './photo.entity';

// @Controller('photo')
// export class PhotoController {
//   constructor(private readonly photoService: PhotoService) {}

//   @Get()
//   findAll(): Promise<Photo[]> {
//     return this.photoService.findAll();
//   }
// }