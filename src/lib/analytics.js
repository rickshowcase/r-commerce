// GA4 ecommerce tracking via the GTM dataLayer.
//
// Events are pushed to window.dataLayer; GTM forwards them to GA4. This keeps
// the app decoupled from GA specifics (same philosophy as the GTM container).
// All functions no-op safely on the server or when GTM isn't loaded
// (e.g. NEXT_PUBLIC_GTM_ID unset in local dev).

const CURRENCY = "CAD";

// Builds a GA4 ecommerce item from a product/cart entry. `source` becomes
// item_list_name so reports can break events down by the page they fired on.
function toItem(product, quantity, source) {
  const variant = [product.selectedColor, product.selectedSize]
    .filter(Boolean)
    .join(" / ");

  return {
    item_id: product.slug,
    item_name: product.name,
    item_category: product.tag,
    item_variant: variant,
    price: Number(product.price),
    quantity,
    ...(source ? { item_list_name: source } : {}),
  };
}

function pushEcommerce(event, item) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  // Clear the previous ecommerce payload so item data never bleeds between events.
  window.dataLayer.push({ ecommerce: null });
  window.dataLayer.push({
    event,
    ecommerce: {
      currency: CURRENCY,
      value: Number(item.price) * item.quantity,
      items: [item],
    },
  });
}

// One unit added per click; `source` identifies which page/button fired it.
export function trackAddToCart(product, source) {
  pushEcommerce("add_to_cart", toItem(product, 1, source));
}

// Removal deletes the whole line, so report the line's full quantity/value.
export function trackRemoveFromCart(item) {
  pushEcommerce("remove_from_cart", toItem(item, Number(item.quantity) || 1, "cart"));
}
