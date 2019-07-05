import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remove-duplicate',
  templateUrl: './remove-duplicate.component.html',
  styleUrls: ['./remove-duplicate.component.css']
})
export class RemoveDuplicateComponent implements OnInit {
  text:string[]=[];
  constructor() { 
    
  }
  ngOnInit() {
    const names = ['India', 'UK', 'US', 'India', 'Germany', 'UK'];
    this.text= removeDups(names); 
  }
}

function removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);

}


