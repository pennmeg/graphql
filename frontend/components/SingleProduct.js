import { useQuery } from '@apollo/client';
import { FIND_PRODUCT } from '../graphql/queries.ts';
import DisplayError from './ErrorMessage';

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(FIND_PRODUCT, {
    variables: { id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  return (
    <div>
      <h2>This is product {data.Product.name}</h2>{' '}
    </div>
  );
}
