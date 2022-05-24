import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  hoten: string = '';
  email: string = '';
  sdt!:number ;


  constructor(private fb: FormBuilder, private notification: NzNotificationService) { }

  ngOnInit(): void {

  }
  submitForm():void{
    if(this.hoten.length !=0 && this.email.length !=0){
      this.createNotification('success');
    }
    else{
      this.createNotification('warning');
    }
  }
  createNotification(type: string): void {
    if(type === 'success'){
    this.notification.create(
      type,
      'Cảm ơn bạn '+this.hoten+' đã liên hệ với chúng tôi!',
      'Chúng tôi sẽ sớm liên hệ bạn thông qua '+this.email+' mà bạn đã cung cấp',
      {nzDuration: 1500});
    }
    else{
      this.notification.create(
        type,
        'Xin lỗi',
        'Nội dung của bạn gửi hiện đang xảy ra vấn đề',{nzDuration: 1500});
      }
  }

}

