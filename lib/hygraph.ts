import { GraphQLClient } from "graphql-request";
import { getEnv } from "./utils";

const endpoint = getEnv("HYGRAPH_ENDPOINT");
const token = getEnv("HYGRAPH_TOKEN");

export const hygraphClient = new GraphQLClient(endpoint, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});
