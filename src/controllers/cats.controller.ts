import { Controller, Get, Post, Body } from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiProperty,
} from '@nestjs/swagger';

class CreateCatDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  age: number;

  @ApiProperty()
  breed: string;
}

@ApiTags('cats')
@Controller('cats')
export class CatsController {
  @Post()
  @ApiOperation({ summary: 'Create cat' })
  @ApiResponse({
    status: 201,
    description: 'The cat has been successfully created.',
  })
  createCat(@Body() _createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }

  @Get()
  @ApiOperation({ summary: 'List cats' })
  @ApiResponse({ status: 200, description: 'List of cats.' })
  findAllCats() {
    return 'This action returns all cats';
  }
}
