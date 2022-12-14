import { ProductThumbnail } from '../../catalog/models/ProductThumbnail';
import { AddToCartModel } from '../models/AddToCartModel';
import { Cart } from '../models/Cart';

export async function addToCart(addToCart: AddToCartModel[]): Promise<Cart> {
  const response = await fetch('/api/cart/storefront/carts', {
    method: 'POST',
    body: JSON.stringify(addToCart),
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return await response.json();
}

export async function getCart(): Promise<Cart> {
  const response = await fetch('/api/cart/storefront/cart', {
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return await response.json();
}

export async function getCartProductThumbnail(id: number): Promise<ProductThumbnail> {
  const response = await fetch('api/product/storefront/products/featured/' + id, {
    headers: { 'Content-type': 'application/json; charset=UTF-8' },
  });
  return await response.json();
}
