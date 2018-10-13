import { Pipe, PipeTransform } from '@angular/core';
import { IPelicula } from '../interfaces/pelicula';

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {

  transform(images:IPelicula): string {
    if (!images)   return 'assets/img/no-image.png';
    else if (images.poster_path)   return `url(http://image.tmdb.org/t/p/w300/${images.poster_path})`;
    else if (images.backdrop_path)   return `url(http://image.tmdb.org/t/p/w300/${images.backdrop_path})`;
    else  return `url(assets/img/no-image.png)`;
    }
}
