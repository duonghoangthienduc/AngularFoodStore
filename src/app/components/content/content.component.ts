import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  // randomCate:number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.CreateRandomNumber(1,7);

  }

  // CreateRandomNumber(max: number, min:number){
  //   return this.randomCate = Math.floor(Math.random()*(max - min + 1) + min);
  // }

}
