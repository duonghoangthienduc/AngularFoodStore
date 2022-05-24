import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  info:String = '';
  constructor( private notification: NzNotificationService) { }

  ngOnInit(): void {

  }
  notice():void{
    this.notification.create(
      'success',
      'Cảm ơn bạn '+this.info+' đã liên hệ với chúng tôi!',
      'Chúng tôi sẽ sớm liên hệ bạn thông qua thông tin mà bạn đã cung cấp',{nzDuration:1500});
  }

}
