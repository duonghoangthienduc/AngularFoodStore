import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/models/tag.model';
import { TagservicesService } from 'src/app/services/tagService/tagservices.service';

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.css']
})
export class TagListComponent implements OnInit {

  constructor(private tagService: TagservicesService) { }
  checked = false;
  indeterminate = false;
  listOfCurrentPageData: readonly Tag[] = [];
  listOfData: readonly Tag[] = [];
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
    this.listOfCurrentPageData.forEach(item => this.updateCheckedSet(item.tagId, value));
    this.refreshCheckedStatus();
  }

  onCurrentPageDataChange($event: readonly Tag[]): void {
    this.listOfCurrentPageData = $event;
    this.refreshCheckedStatus();
  }

  refreshCheckedStatus(): void {
    this.checked = this.listOfCurrentPageData.every(item => this.setOfCheckedId.has(item.tagId));
    this.indeterminate = this.listOfCurrentPageData.some(item => this.setOfCheckedId.has(item.tagId)) && !this.checked;
  }

  ngOnInit(): void {
    this.tagService.getAllProduct().subscribe((data)=>{
      this.listOfData = data
    })
  }

}
