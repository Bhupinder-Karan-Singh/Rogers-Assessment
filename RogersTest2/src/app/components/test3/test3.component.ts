import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Entry } from 'src/app/entry';
import { AllEntryQueryResponse } from 'src/app/graphql';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

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
              pageTemplateCollection(limit:50){
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
