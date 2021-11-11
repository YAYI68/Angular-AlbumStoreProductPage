import { Component, OnInit } from '@angular/core';
import { Album }  from '../album'
import { ProductService } from '../product.service';


@Component({
  selector: 'pd-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})



export class ProductTracklistingComponent implements OnInit {

  constructor( private _productService: ProductService) { }
  albumTrack:any;
  ngOnInit(): void {
    this._productService.getAlbum(1).subscribe({
      next: response=>this.albumTrack = response,
    })
  }

}
