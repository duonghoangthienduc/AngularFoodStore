import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css']
})
export class TabledataComponent implements OnInit {

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Product[]=[];
  listOfData: readonly Product[]=[];
  setOfCheckedId = new Set<number>();

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
    this.refreshCheckedStatus();
  }

  onAllChecked(value: boolean): void {
    this.listOfCurrentPageData.forEach(item =>
      this.updateCheckedSet(item.productId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Product[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item =>
      this.setOfCheckedId.has(item.productId));
    this.indeterminate = this.listOfCurrentPageData.some(item =>
      this.setOfCheckedId.has(item.productId)) && !this.checked;
  }

  constructor(private productService: ProductService) { }
  // listOfSelection = [
  //   // {
  //   //   text: 'Select All Row',
  //   //   onSelect: () => {
  //   //     this.onAllChecked(true);
  //   //   }
  //   // },
  //   // {
  //   //   text: 'Select Odd Row',
  //   //   onSelect: () => {
  //   //     this.listOfCurrentPageData.forEach((data, index) =>
  //   //     this.updateCheckedSet(data.productId, index % 2 !== 0));
  //   //     this.refreshCheckedStatus();
  //   //   }
  //   // },
  //   // {
  //   //   text: 'Select Even Row',
  //   //   onSelect: () => {
  //   //     this.listOfCurrentPageData.forEach((data, index) =>
  //   //     this.updateCheckedSet(data.productId, index % 2 === 0));
  //   //     this.refreshCheckedStatus();
  //   //   }
  //   // }
  // ];
  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data)=>{
      this.listOfData = data;
    })
    this.listOfData = new Array().map(data=>data)
  }

}
