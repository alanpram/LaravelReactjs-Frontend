import React, { useState } from 'react';

function Product({ product, onAddToCart }) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button onClick={() => onAddToCart(product)}>Add to Cart</button>
    </div>
  );
}

function Cart({ cartItems }) {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>{item.name} - ${item.price}</li>
        ))}
      </ul>
    </div>
  );
}

function About() {

  const initialProducts = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
  ];

  const [cart, setCart] = useState([]);
  const [products] = useState(initialProducts);

  const addToCart = (product) => {
    // Menambahkan produk ke keranjang belanja
    setCart([...cart, product]);

    // Simpan data keranjang belanja di Local Storage
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };

  // Mengecek apakah ada data keranjang belanja di Local Storage saat aplikasi dimuat
  React.useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <div>
      <h1>Simple E-Commerce</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product key={product.id} product={product} onAddToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cart} />
    </div>
  );
}

export default About;