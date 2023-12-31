import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import { theme } from '../styles/theme';
import { SidebarDrawerProvider } from '../context/SidebarDrawerContext';
import { makeServer } from '../services/mirage';
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClite } from '../services/queryClient';


if (process.env.NODE_ENV === 'development') {
  makeServer();
}



export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClite}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>

          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}
