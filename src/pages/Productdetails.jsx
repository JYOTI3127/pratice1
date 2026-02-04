import React, { useEffect, useState } from 'react';
import { ShoppingCart, Heart, Star, ChevronLeft, ChevronRight, Check, Truck, Shield, RefreshCw } from 'lucide-react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useParams, useLocation } from 'react-router-dom';
import { products, ProductData } from "../Data/Data";
import { useCart } from '../context/CartContext';

const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M');
  const [selectedColor, setSelectedColor] = useState('Navy');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const {cartItems, addToCart} = useCart()
  const { id } = useParams();
  const location = useLocation();
  const productId = Number(id);

  // Prefer product passed via Link state (exact clicked card); fallback to data arrays
  let product = location.state?.product || ProductData.find((ele) => ele.id === productId) || products.find((ele) => ele.id === productId);

  if (!product) {
    return <div>Product not found!</div>;
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 4 ? 0 : prev - 1));
  };

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === 4 ? 0 : prev + 1));
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8 text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li><a href="#" className="text-gray-500 hover:text-gray-700">Home</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-lg overflow-hidden group">
              <img
                src={product.image}
                alt={`${product.name} - view ${selectedImage + 1}`}
                className="w-full h-full object-cover"
              />

              {/* Navigation Arrows */}
              <button
                onClick={handlePrevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Sale Badge */}
              <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                38% OFF
              </div>
            </div>

            {/* Thumbnail Gallery */}
            {/* <div className="grid grid-cols-5 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                    ? 'border-blue-600 ring-2 ring-blue-200'
                    : 'border-gray-200 hover:border-gray-300'
                    }`}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div> */}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Title and Rating */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {product.rating && (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < Math.floor(product.rating || 0)
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-300'
                          }`}
                      />
                    ))}
                  </div>
                  {product.rating && (
                    <span className="text-sm text-gray-600">
                      {product.rating} ⭐
                    </span>
                  )}
                </div>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-4xl font-bold text-gray-900">
                ₹{product.price}
              </span>
              <span className="text-2xl text-gray-400 line-through">
                ₹{product.originalPrice}
              </span>
              {product.discount && (
                <span className="text-red-600 font-semibold text-lg">
                  {product.discount}
                </span>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-medium">In Stock</span>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Quantity
              </label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 font-semibold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="w-10 h-10 border-2 border-gray-300 rounded-lg hover:border-gray-400 font-semibold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`px-4 py-4 border-2 rounded-lg transition-all ${isWishlisted
                  ? 'border-red-500 bg-red-50'
                  : 'border-gray-300 hover:border-gray-400'
                  }`}
                aria-label="Add to wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`}
                />
              </button>
            </div>

            {/* Discount Info */}
            {product.discount && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <p className="text-orange-800 font-semibold">🎉 Special Offer: {product.discount}</p>
              </div>
            )}

            {/* Shipping Info */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t pt-6">
              <div className="flex items-start gap-3">
                <Truck className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Free Shipping</p>
                  <p className="text-xs text-gray-500">On orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RefreshCw className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Easy Returns</p>
                  <p className="text-xs text-gray-500">30-day return policy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-gray-600 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Secure Payment</p>
                  <p className="text-xs text-gray-500">100% protected</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs>
            <TabList>
              <Tab>How to wear?</Tab>
              <Tab>Packaging</Tab>
            </TabList>

            <TabPanel>
              <h2>1. Wear on your 𝗿𝗶𝗴𝗵𝘁 𝘄𝗿𝗶𝘀𝘁 for optimal energy flow.</h2>
              <h2>2. Start wearing it every morning and set your daily intentions.</h2>
              <h2>3. Wear on 𝗙𝗿𝗶𝗱𝗮𝘆𝘀 to align with the energy of wealth.</h2>
              <h2>4. Match with bright outfits for prosperity.</h2>

            </TabPanel>
            <TabPanel>
              <h2>Presented in an sturdy black kappa box with foam, designed especially for safekeeping and gifting.</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>



    </div>

  );

};

export default ProductDetailsPage;