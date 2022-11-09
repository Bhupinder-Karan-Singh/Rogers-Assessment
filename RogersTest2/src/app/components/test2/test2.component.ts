import { Component, OnInit } from '@angular/core';
import { Apollo, gql} from 'apollo-angular';
import { Entry } from 'src/app/entry';
import { AllEntryQueryResponse } from 'src/app/graphql';


@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  allLinks:Entry[]= [];
  loading: boolean = true;
  object1:any={}
  object2:any={};
  url:any=[];
  seo:any=[];

  constructor(public apollo:Apollo) { 
   }
  
  ngOnInit(): void {
    this.apollo
      .watchQuery<AllEntryQueryResponse>({ query:gql
        `query{
              pageTemplateCollection(limit:1){
                items{
                 url
                 seo{
                  entryTitle
                  title
                  description
                  canonicalUrl
                  isNoIndex
                 }
                }
              }
            }` })
      .valueChanges.subscribe(response => {
        console.log('RESULTS::::::::', response)
        this.allLinks = <Entry[]><unknown>response.data;
        console.log(":::::::::::::", this.allLinks)
        this.object1 = this.allLinks;
        this.object2 = this.object1.pageTemplateCollection.items;

        for(let i=0; i<this.object2.length; i++){
          this.url[i] = this.object2[i].url;
       }
       console.log("url  ::::::::", this.url)

        for(let i=0; i<this.object2.length; i++){
           this.seo[i] = this.object2[i].seo;
        }
        console.log("seo ::::::::", this.seo)
        });
  } 
}
