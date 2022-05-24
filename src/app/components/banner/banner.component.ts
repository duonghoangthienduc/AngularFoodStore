import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  array?: Array<String | number>;

  constructor() { }

  ngOnInit(): void {
    this.array = ['../../assets/images/b6.png',
                  '../../assets/images/b1.png',
                  '../../assets/images/b3.png',
                  '../../assets/images/b2.png',
                  '../../assets/images/b4.png',]
  }

}
