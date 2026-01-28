import React, { useState } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, Tag, Truck, Shield, CreditCard } from 'lucide-react';

const Addtocartpage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Premium Wireless Headphones',
      price: 8999,
      originalPrice: 12999,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
      quantity: 1,
      color: 'Black',
      size: 'Standard',
      inStock: true
    },
    {
      id: 2,
      name: 'Smart Watch Series 5',
      price: 24999,
      originalPrice: 29999,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
      quantity: 2,
      color: 'Silver',
      size: '42mm',
      inStock: true
    },
    {
      id: 3,
      name: 'Leather Laptop Bag',
      price: 3499,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200&h=200&fit=crop',
      quantity: 1,
      color: 'Brown',
      size: '15 inch',
      inStock: true
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toUpperCase() === 'SAVE10') {
      setAppliedCoupon({ code: 'SAVE10', discount: 10 });
    } else if (couponCode.toUpperCase() === 'FLAT500') {
      setAppliedCoupon({ code: 'FLAT500', discount: 500, type: 'flat' });
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const savings = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.price) * item.quantity, 0);
  const shippingFee = subtotal > 10000 ? 0 : 99;
  
  let couponDiscount = 0;
  if (appliedCoupon) {
    couponDiscount = appliedCoupon.type === 'flat' 
      ? appliedCoupon.discount 
      : Math.round(subtotal * appliedCoupon.discount / 100);
  }
  
  const total = subtotal + shippingFee - couponDiscount;

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
            <ShoppingCart className="w-8 h-8" />
            Shopping Cart ({cartItems.length} items)
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-lg shadow p-12 text-center">
                <ShoppingCart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Your cart is empty</h3>
                <p className="text-gray-500">Add items to get started</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="bg-white rounded-lg shadow p-6">
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-32 h-32 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.name}</h3>
                          <div className="flex gap-4 text-sm text-gray-600 mb-3">
                            <span>Color: <strong>{item.color}</strong></span>
                            <span>Size: <strong>{item.size}</strong></span>
                          </div>
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-2xl font-bold text-gray-900">₹{item.price.toLocaleString()}</span>
                            <span className="text-sm text-gray-500 line-through">₹{item.originalPrice.toLocaleString()}</span>
                            <span className="text-sm font-semibold text-green-600">
                              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                            </span>
                          </div>
                          {item.inStock ? (
                            <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-xs font-semibold rounded-full">
                              In Stock
                            </span>
                          ) : (
                            <span className="inline-block px-3 py-1 bg-red-100 text-red-800 text-xs font-semibold rounded-full">
                              Out of Stock
                            </span>
                          )}
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 h-fit"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-4">
                        <span className="text-sm text-gray-600">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="px-3 py-2 hover:bg-gray-100"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="px-4 py-2 font-semibold border-x border-gray-300">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="px-3 py-2 hover:bg-gray-100"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-gray-700 ml-auto">
                          Subtotal: ₹{(item.price * item.quantity).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
              
              {/* Coupon Section */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Have a coupon?
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 font-semibold"
                  >
                    Apply
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 flex items-center gap-2 text-green-600 text-sm">
                    <Tag className="w-4 h-4" />
                    <span>Coupon "{appliedCoupon.code}" applied!</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-2">Try: SAVE10 or FLAT500</p>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-green-600 font-semibold">
                  <span>Savings</span>
                  <span>- ₹{savings.toLocaleString()}</span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600 font-semibold">
                    <span>Coupon Discount</span>
                    <span>- ₹{couponDiscount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className={shippingFee === 0 ? 'text-green-600 font-semibold' : ''}>
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>
                {shippingFee > 0 && (
                  <p className="text-xs text-blue-600">
                    Add ₹{(10000 - subtotal).toLocaleString()} more for FREE shipping
                  </p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 mb-6">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>
              </div>

              <button
                disabled={cartItems.length === 0}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors mb-4"
              >
                Proceed to Checkout
              </button>

              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Continue Shopping
              </button>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Truck className="w-5 h-5 text-green-600" />
                  <span>Free shipping on orders over ₹10,000</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <span>Secure checkout with SSL encryption</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  <span>Multiple payment options available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addtocartpage;
