import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {  IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  dropdownList = [];
  selectedItems = [];
  dropdownSettings: IDropdownSettings ;

  constructor( private router: Router) { }

  ngOnInit(): void {
    this.dropdownList = [
      { item_id: 1, item_text: 'Maths' },
      { item_id: 2, item_text: 'English' },
      { item_id: 3, item_text: 'Chemistry' },
      { item_id: 4, item_text: 'Physics' },
      { item_id: 5, item_text: 'Social Sciende' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 10,
      allowSearchFilter: true
    };
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onSubmit(form: NgForm) {
    this.router.navigate(['/login']);    
}
}
