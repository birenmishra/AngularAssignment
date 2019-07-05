import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-character',
  templateUrl: './count-character.component.html',
  styleUrls: ['./count-character.component.css']
})
export class CountCharacterComponent implements OnInit {

  data: string;
  output:string[]=[];

  //output:string;
  constructor() { }

  ngOnInit() {
  }

onCountChar()
{    
  var input=this.data;
  var ch,index,count;
  var counts={};

  for(index=0;index<input.length;++index){
    ch=input.charAt(index);
    count=counts[ch];
    counts[ch]=count ? count + 1 : 1;      
  }

  for(ch in counts)
    { 
      if(ch==" ")
      this.output.push("(space)" + " : " + counts[ch]);
      else
      this.output.push(ch + " : " + counts[ch]);
    }
}
  }

