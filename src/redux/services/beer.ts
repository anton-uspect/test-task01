import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { TBeerItem } from './types';

export const beerApi = createApi({
  reducerPath: 'beerApi',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_API_URL || '' }),
  endpoints: builder => ({
    getBeerByName: builder.query({
      query: (page: number) => `beers?page=${page}&per_page=20`,

      serializeQueryArgs: ({ endpointName }) => endpointName,

      merge: (currentCache: TBeerItem[], newItems: TBeerItem[]) => {
        currentCache.push(...newItems);
      },

      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useGetBeerByNameQuery } = beerApi;
