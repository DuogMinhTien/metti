import { useQuery } from 'react-query';
import { api } from './base';

async function fetchProduct(defaultQuery = {}) {
  const { data: { data } = {} } = await api.apiCall(
    'get',
    'product/list',
    defaultQuery
  );
  return data;
}

export function useFetchProduct(defaultQuery = {}) {
  return useQuery(['product-list', defaultQuery], () =>
    fetchProduct(defaultQuery)
  );
}

async function fetchDetailProduct(productId) {
  const { data: { data } = {} } = await api.apiCall('get', 'product/item', {
    id: productId
  });
  return data;
}

export function useFetchDetailProduct(productId) {
  return useQuery(['product-detail', productId], () =>
    fetchDetailProduct(productId)
  );
}
