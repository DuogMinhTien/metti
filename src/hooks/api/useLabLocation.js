import { useQuery } from 'react-query';
import { api } from './base';

async function fetchLabsLocation(defaultQuery = {}) {
  const { data: { data } = {} } = await api.apiCall(
    'get',
    'address',
    defaultQuery
  );
  return data;
}

export function useFetchLabLocation(defaultQuery = {}) {
  return useQuery(['labs-location-list', defaultQuery], () =>
    fetchLabsLocation(defaultQuery)
  );
}
