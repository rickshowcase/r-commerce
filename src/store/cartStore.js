import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cartItems: [],

      addToCart: (product) => {
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
      },

      removeFromCart: (cartId) => {
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.cartId !== cartId),
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
