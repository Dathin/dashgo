import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import {SidebarDrawerProvider} from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage';
const { NODE_ENV } = process.env;
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from '../services/queryClient';


if(NODE_ENV === 'development') {
  makeServer();
  console.log('Created dev server')
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>

  ) 
}

export default MyApp
