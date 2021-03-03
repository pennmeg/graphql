import Link from 'next/link';
import ItemStyles from './styles/ItemStyles';
import Title from './styles/Title';
import PriceTag from './styles/PriceTag';
import formatMoney from '../lib/formatMoney';

export default function Product({ product }) {
  return (
    <ItemStyles>
      {/* TODO: Fix images */}
      <img src={product?.photo?.img?.publicUrlTransformed} alt={product.name} />
      <Title>
        <Link href="/product/[id]" as={`/product/${product.id}`}>
          {product.name}
        </Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
      {/* TODO: Add buttons for edit/delete */}
    </ItemStyles>
  );
}
