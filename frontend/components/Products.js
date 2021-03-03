import styled from 'styled-components';
import { useQuery } from '@apollo/client';
import { ALL_PRODUCTS } from '../graphql/queries.ts';
import Product from './Product';

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allProducts = data.allProducts ?? [];

  return (
    <div>
      <ProductsList>
        {allProducts.map((p) => (
          <Product product={p} key={p.id} />
        ))}
      </ProductsList>
    </div>
  );
}
