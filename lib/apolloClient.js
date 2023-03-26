import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: new HttpLink({
        uri: `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    }),
    cache: new InMemoryCache(),
    defaultOptions: {
        query: {
            fetchPolicy: "no-cache",
        },
    },
});

export default client;
