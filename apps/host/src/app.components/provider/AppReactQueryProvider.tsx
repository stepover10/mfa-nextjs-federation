import {ReactNode, useState} from 'react';
import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
  QueryObserverOptions,
} from '@tanstack/react-query';
import {ReactQueryDevtools} from '@tanstack/react-query-devtools';
import {AppProps} from 'next/app';

const queries: QueryObserverOptions = {
  retry: false,
  refetchOnWindowFocus: false,
  refetchIntervalInBackground: false,
};

interface IAppReactQueryProvider extends AppProps {
  dehydratedState?: unknown;
}

const AppReactQueryProvider = ({
                                 pageProps,
                                 children,
                               }: {
  pageProps: IAppReactQueryProvider;
  children: ReactNode;
}) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries,
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps?.dehydratedState || {}}>
        <ReactQueryDevtools initialIsOpen={false}/>
        {children}
      </HydrationBoundary>
    </QueryClientProvider>
  );
};

export default AppReactQueryProvider;
