import { Controller, Get, Post, Body } from '@nestjs/common';
import { ImagesService } from './images.service';
import { FavoriteImage } from './dto/favorite-image.dto';

@Controller('imagenes')
export class ImagesController {
  constructor(private readonly imagesService: ImagesService) {}
  
  @Get()
  findRandomImages() {
    return this.imagesService.findRandomImages();
  }

  @Post('/favoritos')
  saveFavorite(@Body() favoriteImage: FavoriteImage) {
    return this.imagesService.saveFavorite(favoriteImage);
  }

  @Get('/favoritos')
  findFavoriteImages() {
    return this.imagesService.findFavoriteImages();
  }

}
