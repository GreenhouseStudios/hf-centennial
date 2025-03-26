import { gql } from "graphql-request";

export const GET_CATEGORIES = gql`
query GetCategories {
  categories {
    nodes {
      slug
      description
      name
    }
  }
}
`;