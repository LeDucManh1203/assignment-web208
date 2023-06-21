import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProduct } from 'src/app/interfaces/product';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {
  submitted: boolean = false;
  product ?: IProduct
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(1)]],
    desc: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  });
  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute

  ) {
    this.route.paramMap.subscribe((params: any) => {
      const id = String(params.get('id'))
      this.service.getProductById(id).subscribe({
        next: (product) => {
          this.product = product
          this.form.patchValue(product)
        }
      })
    })
  }
  onHandleSubmit() {
    this.submitted = true;
    if (this.form.valid) {
      const product: IProduct = {
        name: this.form.value.name || '',
        price: this.form.value.price || 0,
        desc: this.form.value.desc || '',
      }
      this.service.addProduct(product).subscribe({
        next: () => {
          alert('Add product successfully')
          this.router.navigate(['admin'])
        }
      })
    }
  }
}
