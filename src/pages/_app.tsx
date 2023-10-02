import { ApolloProvider } from '@apollo/client';
import client from '../graphql/apollo-client';
import { AppProps } from 'next/app';

import './globals.scss';
import { Layout } from '../components/Layout/Layout';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ApolloProvider>
    );
}
