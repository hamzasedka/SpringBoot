import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';

import { AppService } from './app.service';

import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  create(@Body() createCatDto: CreateCatDto) {
    console.log('create ...', createCatDto);
    return createCatDto;
  }

  @Get()
  findAll(@Query() query: any) {
    return query;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: CreateCatDto) {
    console.log('update ...',updateCatDto);
    return { id ,...updateCatDto};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }
}
