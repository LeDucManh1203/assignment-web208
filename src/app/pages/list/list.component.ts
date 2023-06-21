import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  products ?: IProduct[]
  constructor(
    private service: ServiceService
  ){
     this.service.getAllProduct().subscribe({
        next: (data) => {
          this.products = data
        }
     })
  }
  deleteProduct(id: any){
    const confirm = window.confirm('Are you sure you want to delete?')
    if(confirm){
      this.service.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products?.filter((product) => product.id !== id)
        }
      })
    }
  }

}
