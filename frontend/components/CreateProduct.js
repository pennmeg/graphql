import useForm from '../lib/useForm';
import Form from './styles/Form';
import { useMutation } from '@apollo/client';
import DisplayError from './ErrorMessage';
import { CREATE_PRODUCT } from '../graphql/mutations.ts';
import { ALL_PRODUCTS } from '../graphql/queries.ts';
import Router from 'next/router';

export default function CreateProduct() {
  const { inputs, handleChange, clearForm, resetForm } = useForm({
    name: '',
    price: 0,
    description: '',
    image: '',
  });

  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: inputs,
      refetchQueries: [{ query: ALL_PRODUCTS }],
    }
  );

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        console.log('---- await');
        await createProduct();
        console.log('---- product', data);

        clearForm();
        Router.push({
          pathname: `/product/${data.createProduct.id}`,
          query: { id: data.createProduct.id },
        });
      }}
    >
      <DisplayError error={error} />
      <fieldset disable={loading} aria-busy={loading}>
        <label htmlFor="image">
          Image
          <input type="file" name="image" id="image" onChange={handleChange} />
        </label>
        <label htmlFor="name">
          Name
          <input
            required
            type="text"
            name="name"
            id="name"
            value={inputs.name}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="price">
          Price
          <input
            required
            type="number"
            name="price"
            id="price"
            value={inputs.price}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            required
            name="description"
            id="description"
            value={inputs.description}
            onChange={handleChange}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
