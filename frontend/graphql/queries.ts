import gql from 'graphql-tag';

export const ALL_PRODUCTS = gql`
  query allProducts {
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
