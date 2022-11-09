import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule , NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Test1Component } from './components/test1/test1.component';
import { Test2Component } from './components/test2/test2.component';
import { Test3Component } from './components/test3/test3.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Test4Component } from './components/test4/test4.component';
import { Test5Component } from './components/test5/test5.component';
import {Apollo, ApolloModule, APOLLO_OPTIONS, gql} from 'apollo-angular';
import {InMemoryCache, ApolloClientOptions, ApolloClient} from '@apollo/client/core';
import { HttpLinkModule } from 'apollo-angular-link-http'; 
import { HttpLink } from 'apollo-angular/http';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from '@apollo/client/core';



@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    Test2Component,
    Test3Component,
    NavbarComponent,
    Test4Component,
    Test5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule,
    ApolloModule,
    HttpClientModule,
    HttpLinkModule,
    
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link:  createHttpLink({
          uri: 'https://graphql.contentful.com/content/v1/spaces/8utyj17y1gom/environments/master/',
          headers:{
            Authorization: `Bearer ${"e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37"}`
          }
        })
      };
    },
    deps: [HttpLink]
}],
  bootstrap: [AppComponent]

  
})
export class AppModule {
  
 }
