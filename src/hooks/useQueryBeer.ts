import { useEffect, useState } from 'react';

import { useGetBeerByNameQuery } from '@/redux/services/beer';

export const useQueryBeer = () => {
  const [page, setPage] = useState<number>(1);
  const { data, isFetching } = useGetBeerByNameQuery(page);

  useEffect(() => {
    const onScroll = () => {
      const isScrolledToBottom = (window.innerHeight + window.scrollY + 10) >= document.body.offsetHeight;

      if (isScrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', onScroll);

    return function () {
      document.removeEventListener('scroll', onScroll);
    };
  }, [page, isFetching]);

  return {
    data: data || [],
    isLoading: isFetching,
  };
};
