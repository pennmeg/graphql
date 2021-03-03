import gql from 'graphql-tag';

export const ALL_PRODUCTS = gql`
  query AllProducts {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

export const FIND_PRODUCT = gql`
  query FindProduct($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;
