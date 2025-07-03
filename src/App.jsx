import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Laptop', price: 999 },
  { id: 2, name: 'Phone', price: 699 },
  { id: 3, name: 'Headphones', price: 199 },
  { id: 4, name: 'Watch', price: 299 }
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '2rem' }}>Simple Store</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
        {/* Products */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Products</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {products.map(product => (
              <div key={product.id} style={{ border: '1px solid #ccc', padding: '1rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: '500', marginBottom: '0.5rem' }}>{product.name}</h3>
                <p style={{ color: '#16a34a', fontWeight: 'bold', marginBottom: '0.5rem' }}>${product.price}</p>
                <button 
                  onClick={() => addToCart(product)}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart */}
        <div>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Cart ({cart.length})</h2>
          {cart.length === 0 ? (
            <p style={{ color: '#6b7280' }}>Cart is empty</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {cart.map((item, index) => (
                <div key={index} style={{ 
                  border: '1px solid #ccc', 
                  padding: '1rem', 
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <h4 style={{ fontWeight: '500', marginBottom: '0.25rem' }}>{item.name}</h4>
                    <p style={{ color: '#16a34a' }}>${item.price}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    style={{
                      backgroundColor: '#ef4444',
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer'
                    }}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div style={{ borderTop: '1px solid #ccc', paddingTop: '1rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Total: ${total}</h3>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;