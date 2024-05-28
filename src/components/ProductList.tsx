import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { toast } from 'react-toastify';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Product 1',
    price: 100,
    image: 'https://via.placeholder.com/150',
    description: 'This is a great product 1'
  },
  {
    id: '2',
    name: 'Product 2',
    price: 200,
    image: 'https://via.placeholder.com/150',
    description: 'This is a great product 2'
  },
{
  id: '3',
  name: 'Product 1',
  price: 100,
  image: 'https://via.placeholder.com/150',
  description: 'This is a great product 1'
},{
  id: '4',
  name: 'Product 2',
  price: 200,
  image: 'https://via.placeholder.com/150',
  description: 'This is a great product 2'
},{
id: '5',
name: 'Product 1',
price: 100,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 1'
},{
id: '6',
name: 'Product 2',
price: 200,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 2'
},
{
id: '7',
name: 'Product 2',
price: 200,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 2'
},
{
id: '8',
name: 'Product 2',
price: 200,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 2'
},
{
id: '9',
name: 'Product 2',
price: 200,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 2'
},
{
id: '10',
name: 'Product 2',
price: 200,
image: 'https://via.placeholder.com/150',
description: 'This is a great product 2'
}
  // Add more products as needed
];

const ProductList: React.FC = () => {
  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart(product));
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="width=[1200px]" >
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold text-lg">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <p className="text-gray-700 text-sm mt-2">{product.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
