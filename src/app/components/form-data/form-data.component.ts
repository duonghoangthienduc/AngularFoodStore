import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NzFormTooltipIcon } from 'ng-zorro-antd/form';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { Bill } from 'src/app/models/bill.model';
import { User } from 'src/app/models/user.model';
import { BillService } from 'src/app/services/billService/bill.service';
import { CartService } from 'src/app/services/cartService/cart.service';
import { UserService } from 'src/app/services/userService/user.service';

@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {

  validateForm!: FormGroup;
  user: User[] = [];
  bill: Bill[] = [];

  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return { required: true };
    }
    return {};
  };


  constructor(private fb: FormBuilder,
              private userService: UserService,
              private billService: BillService,
              private cartService: CartService,
              private notification: NzNotificationService,
              private route: Router,) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      email: [null, [Validators.email, Validators.required]],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      middleName: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
    });

    this.userService.getAll().subscribe((data)=>{
      this.user = data;
    });
    this.billService.getAllBill().subscribe((data)=>{
      this.bill = data
    })

  }

  Order(){
    const userId = this.user.length + 1;
    console.log(userId)
    const billId = this.bill.length+1;
    const cartId = this.cartService.getCartId();
    if(this.validateForm.valid){
      const {email, firstName, lastName, middleName,phone,address} = this.validateForm.value;
      this.userService.addNewCus(userId, firstName, lastName, middleName,phone,email,address ).subscribe({
        next:(res) => {
          console.log(res);
          this.billService.AddNewBill(billId, userId, cartId).subscribe({
            next:(res) => {
              console.log(res);
              this.cartService.clearCartId();
              this.cartService.clearCart();
              this.notification.create(
                'success',
                'Cảm ơn bạn đã đặt món bên cửa hàng của chúng tôi!',
                'Chúng tôi sẽ sớm giao hàng tới bạn thông qua thông tin mà bạn đã cung cấp',{nzDuration:2500});
                window.location.replace('');
            },
            error: (e) => console.error(e)
          })
        },
        error: (e) => console.error(e)
      })
    }

  }


}



