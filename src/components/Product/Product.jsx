"use client";
import "./Product.css";
import Link from "next/link";

import { useCartStore } from "@/store/cartStore";

const Product = ({
  product,
  productIndex,
  showAddToCart = true,
  className = "",
  innerRef,
  style,
}) => {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className={`product ${className}`} ref={innerRef} style={style}>
      <Link href={`/product/${product.slug}`} className="product-img" onClick={() => window.dispatchEvent(new Event("menu:close"))}>
        <img src={`/products/product_${productIndex}.png`} alt={product.name} />
      </Link>
      <div className="product-info">
        <div className="product-info-wrapper">
          <p>{product.name}</p>
          <p>${product.price}</p>
        </div>
        {showAddToCart && (
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
