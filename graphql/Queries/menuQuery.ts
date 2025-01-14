export const mainMenuQuery = `query MainMenuQuery {
  menuItems(where: {location: PRIMARY}) {
    edges {
      node {
        id
        uri
        label
        parentId
      }
    }
  }
  }
  `;
export const footerMenuQuery = `query footerQuery {
  menuItems(where: {location: FOOTER}) {
    edges {
      node {
        id
        uri
        label
        parentId
      }
    }
  }
}
  `;
