import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reverse-string',
  templateUrl: './reverse-string.component.html',
  styleUrls: ['./reverse-string.component.css']
})
export class ReverseStringComponent implements OnInit {

  value:string;
  reversedValue:string;
  radioValue:string;
  constructor() { }

  ngOnInit() {
  }

  onReverse()
  {
    if(this.radioValue=="UsingSplit"){
      this.reversedValue=reverseStringUsingSplit(this.value.trim());
    }
    else if(this.radioValue=="WithoutUsingSplit")
    {
      this.reversedValue=reverseStringWithoutUsingSplit(this.value);
    }
    
  }
}
function reverseStringUsingSplit(str:string){
  return str.split("").reverse().join('');
}

function reverseStringWithoutUsingSplit(str:string):string{

//Trim the string both from left and right side
str.trim();

// Take empty array revArray 
const revArray = [];
const length = str.length - 1; 

// Looping from the end 
for(let i = length; i >= 0; i--) { 
revArray.push(str[i]); 
} 

// Joining the array elements 
return revArray.join('');
}
