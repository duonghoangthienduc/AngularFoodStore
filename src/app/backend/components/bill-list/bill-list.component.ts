import { Component, OnInit } from '@angular/core';
import { Bill } from 'src/app/models/bill.model';
import { Cart } from 'src/app/models/cart.model';
import { BillService } from 'src/app/services/billService/bill.service';
import { CartOnlServiceService } from 'src/app/services/cartOnlineService/cart-onl-service.service';


@Component({
  selector: 'app-bill-list',
  templateUrl: './bill-list.component.html',
  styleUrls: ['./bill-list.component.css']
})


export class BillListComponent implements OnInit {

  constructor(private billService: BillService,
              private cartService: CartOnlServiceService,
              ) { }
  cartDetail = new Cart
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Bill[] = [];
  listOfData: readonly Bill[] = [];
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
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.billId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Bill[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.billId));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.billId)) && !this.checked;
  }
  ngOnInit(): void {
    this.billService.getAllBill().subscribe({
      next:(data) => {
        this.listOfData = data;
      },
      error: (e) => console.error(e)
    })
  }

}
