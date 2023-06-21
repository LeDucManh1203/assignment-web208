import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  product?: IProduct

  constructor(
    private service: ServiceService,
    private route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe((params: any) => {

      const id = String(params.get('id'))

      this.service.getProductById(id).subscribe({
        next: (data) => {
          this.product = data
        }
      })
    })
  }
}
