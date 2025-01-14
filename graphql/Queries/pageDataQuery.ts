export const pageDataQuery = `
query GetPageByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    ... on Page {
      id
      uri
      blocks(postTemplate: false)
    }
  }
}
`;
