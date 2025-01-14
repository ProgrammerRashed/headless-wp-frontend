export const slugsQuery = `
query GetAllSlugs {
  menuItems {
    nodes {
      uri
    }
  }
  pages(first: 100) {
    nodes {
      uri
    }
  }
}
`;
