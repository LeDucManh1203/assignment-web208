import { Component } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';
import { IProduct } from 'src/app/interfaces/product';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  submitted: boolean = false;
  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
    price: [0, [Validators.required, Validators.min(1)]],
    desc: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
  });
  constructor(
    private service: ServiceService,
    private formBuilder: FormBuilder,
    private route: Router
  ){}
  onHandleSubmit(){
    this.submitted = true;
    if(this.form.valid){
      const product: IProduct = {
        name: this.form.value.name || '',
        price: this.form.value.price || 0,
        desc: this.form.value.desc || '',
      }
      this.service.addProduct(product).subscribe({
        next: () => {
          alert('Add product successfully')
          this.route.navigate(['admin'])
        }
      })
    }
  }
}
