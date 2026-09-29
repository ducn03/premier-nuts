/**
 * cart.js — Quản lý giỏ hàng
 * Chỉ lưu { productId: quantity } vào localStorage.
 * Giá luôn lấy từ products.json — không bao giờ từ DOM hay localStorage.
 */

const CART_KEY = 'pn_cart';
const PRODUCTS_PATH = (() => {
  const isNested = window.location.pathname.split('/').includes('pages');
  return isNested ? '../features/catalog/products.json' : 'features/catalog/products.json';
})();

let _productsCache = null;

async function loadProducts() {
  if (_productsCache) return _productsCache;
  const res = await fetch(PRODUCTS_PATH);
  _productsCache = await res.json();
  return _productsCache;
}

function parsePrice(str) {
  return parseInt(str.replace(/[^\d]/g, ''), 10) || 0;
}

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || {}; }
  catch { return {}; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: cart }));
}

export function addToCart(productId, qty = 1) {
  const cart = getCart();
  cart[productId] = (cart[productId] || 0) + qty;
  saveCart(cart);
}

export function removeFromCart(productId) {
  const cart = getCart();
  delete cart[productId];
  saveCart(cart);
}

export function updateQty(productId, qty) {
  const cart = getCart();
  if (qty <= 0) { delete cart[productId]; }
  else { cart[productId] = qty; }
  saveCart(cart);
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
  window.dispatchEvent(new CustomEvent('cart-updated', { detail: {} }));
}

export function getCartCount() {
  return Object.values(getCart()).reduce((a, b) => a + b, 0);
}

/** Trả về mảng { product, qty, lineTotal } với giá từ JSON */
export async function getCartItems() {
  const cart = getCart();
  const products = await loadProducts();
  return Object.entries(cart).map(([id, qty]) => {
    const product = products.find(p => p.id === id);
    if (!product) return null;
    const unitPrice = parsePrice(product.price);
    return { product, qty, unitPrice, lineTotal: unitPrice * qty };
  }).filter(Boolean);
}

export async function getCartTotal() {
  const items = await getCartItems();
  return items.reduce((sum, i) => sum + i.lineTotal, 0);
}
