import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import { trackAddToCart, trackRemoveFromCart } from "@/lib/analytics";

export const useCartStore = create(
  persist(
    (set, get) => ({
      cartItems: [],

      // `source` identifies which page/button triggered the add (analytics only;
      // it is not stored on the cart item).
      addToCart: (product, source) => {
        const cartId = `${product.slug}-${product.selectedColor || ""}-${product.selectedSize || ""}`;
        set((state) => {
          const existingItem = state.cartItems.find((item) => item.cartId === cartId);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map((item) =>
                item.cartId === cartId
                  ? { ...item, quantity: (Number(item.quantity) || 1) + 1 }
                  : item
              ),
            };
          }
          return {
            cartItems: [...state.cartItems, { ...product, cartId, quantity: 1 }],
          };
        });
        trackAddToCart(product, source);
      },

      removeFromCart: (cartId) => {
        // Capture the line before removing so the event reports its full quantity.
        const item = get().cartItems.find((i) => i.cartId === cartId);
        if (item) trackRemoveFromCart(item);
        set((state) => ({
          cartItems: state.cartItems.filter((i) => i.cartId !== cartId),
        }));
      },
    }),
    {
      name: "rcommerce-cart",
      // sessionStorage survives page refreshes but is cleared when the tab/window
      // is closed — so the cart is not retained across separate sessions.
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export const useCartCount = () =>
  useCartStore((state) =>
    state.cartItems.reduce((total, item) => total + (item.quantity || 1), 0)
  );

export const useCartSubtotal = () =>
  useCartStore((state) =>
    state.cartItems.reduce(
      (total, item) => total + parseFloat(item.price) * (item.quantity || 1),
      0
    )
  );
