/* eslint-disable react/display-name */
import { useQuery } from '@apollo/client';
import { DocumentNode } from 'graphql';
import React from 'react';
import { Loader } from '../../components/Loader';
import { useRouter } from 'next/router';

export function requestData<P>(
    Component: React.ComponentType<P>,
    queries: DocumentNode
) {
    return (props: P) => {
        const router = useRouter();
        const { data, loading, error } = useQuery(queries);

        if (loading) {
            return <Loader />;
        }

        if (error) {
            router.push('/404');
        }

        return <Component {...props} data={data} />;
    };
}
