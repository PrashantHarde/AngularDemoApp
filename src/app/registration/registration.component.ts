import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings : IDropdownSettings = {};
  categoryserviceList: Array<Int32Array> = [];

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Maths' },
      { item_id: 2, item_text: 'English' },
      { item_id: 3, item_text: 'Chemistry' },
      { item_id: 4, item_text: 'Physics' },
      { item_id: 5, item_text: 'Social Sciende' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Maths' },
      { item_id: 4, item_text: 'English' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onCheck(service: any, event) {
    console.log(service, event, "Selected");
    if (event.target.checked) {
      this.categoryserviceList.push(service);
  
    } else if (!event.target.checked) {
      let index = this.categoryserviceList.indexOf(service);
      this.categoryserviceList.splice(index, 1);
    }
    console.log(this.categoryserviceList);
  
  }
  onSubmit(form: NgForm) {
    this.router.navigate(['/login']);    
}
}
