import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  entries:any;
  url:any;
  seo_title:any;
  description:any;
  isNoIndex:any;

  constructor(private apiservice:ApiService) {
    this.apiservice.callApi().subscribe(res=>{
      if(res){
        this.entries=res;
        this.url="/"+this.entries.items[0].fields.url.substring(5).charAt(1).toUpperCase() + this.entries.items[0].fields.url.substring(7);
        this.seo_title=this.entries.includes.Entry[0].fields.title;
        this.description=this.entries.includes.Entry[0].fields.description.slice(0, 80);
        this.isNoIndex=this.entries.includes.Entry[0].fields.isNoIndex;
        console.log("response got", this.entries.items[0]);
     }else{
       console.log("No response");
     }
     })
   }

  ngOnInit(): void {
  }
}
