import { Entry } from "./entry";
import gql from 'graphql-tag'

export const ALL_LINKS_QUERY = gql`
query pageTemplateCollection{
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
  }
`
;

export interface AllEntryQueryResponse {
  allLinks: Entry[];
  loading: boolean;
}