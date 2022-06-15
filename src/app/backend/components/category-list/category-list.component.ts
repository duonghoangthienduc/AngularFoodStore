import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { CategoryserviceService } from 'src/app/services/categoryService/categoryservice.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private cateService: CategoryserviceService) { }
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Category[] = [];
  listOfData: readonly Category[] = [];
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
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.categoryId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Category[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.categoryId));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.categoryId)) && !this.checked;
  }

  ngOnInit(): void {
    this.cateService.getAllProduct().subscribe((data)=>{
      this.listOfData = data
    })
  }

}
