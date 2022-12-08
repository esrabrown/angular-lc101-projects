import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photo/Image Section Title Here';
  image1 = 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg';
  image2 = 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/11/12/14/leon3.jpg?quality=75&width=982&height=726&auto=webp';
  image3 = 'https://flxt.tmsimg.com/assets/p10903_p_v8_af.jpg';

  constructor() { }

  ngOnInit() {
  }

}