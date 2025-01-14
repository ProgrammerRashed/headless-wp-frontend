import { gql } from "@apollo/client";
import ApolloClientLib from "./ApolloClientLib";

const getGqlData = async (query, variables = null) => { 
    const { data } = await ApolloClientLib.query({
        query: gql`${query}`,
        variables,
    });
    return data;
};

export default getGqlData;
