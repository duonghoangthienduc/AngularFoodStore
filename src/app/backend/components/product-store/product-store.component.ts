import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/productService/product.service';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {

  constructor(private productService: ProductService) { }

  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Product[] = [];
  listOfData: readonly Product[] = [];
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
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.productId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Product[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.productId));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.productId)) && !this.checked;
  }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe((data:any)=>{this.listOfData = data})
    this.listOfData = new Array(200).fill(0)

  }


}
