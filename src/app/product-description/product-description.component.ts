import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private productService: ProductService) { }

    albumInfo:any;
  ngOnInit() {  
    this.productService.getAlbum(1).subscribe({
      next: response => this.albumInfo = response,
  })
    
  }

}
