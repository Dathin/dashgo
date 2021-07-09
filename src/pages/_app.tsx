import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import {SidebarDrawerProvider} from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage';
const { NODE_ENV } = process.env;

if(NODE_ENV === 'development') {
  makeServer();
  console.log('Created dev server')
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  ) 
}

export default MyApp
