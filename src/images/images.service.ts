import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { FavoriteImage } from './dto/favorite-image.dto';


@Injectable()
export class ImagesService {
  private api_host = process.env.api_host;
  private headers = {'x-api-key':process.env.images_api_key}
  private subId = process.env.sub_id;
  constructor(){}

  async findRandomImages() {
    const uri = this.api_host+'/images/search?limit=10&order=RANDOM'
    const headers = this.headers
    let randomImages = await Promise.resolve(axios.get(uri,{headers}));
    return randomImages.data
  }

  async saveFavorite(favoriteImage: FavoriteImage) {
    const headers = this.headers;
    const uri = this.api_host+'/favourites';
    const body = {image_id:favoriteImage.image_id,sub_id:this.subId}
    console.log(body)
    console.log(uri)
    let savedImage = await Promise.resolve(axios.post(uri,body,{headers}))
    console.log(savedImage)
    return savedImage.data;
  }

  async findFavoriteImages() {
    const headers = this.headers;
    const uri = this.api_host+'/favourites?sub_id='+this.subId;
    let favouriteImages = await Promise.resolve(axios.get(uri,{headers}));
    return favouriteImages.data
  }



}
