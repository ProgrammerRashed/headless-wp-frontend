import getGqlData from "../../lib/getGqlData";
import { footerMenuQuery, mainMenuQuery } from "../Queries";

export const getMainMenuData = async () => {
  const menuData = await getGqlData(mainMenuQuery);
  const cleanData = menuDataCleaner(menuData);
  return cleanData;
};


export const getFooterMenu = async () => {
  const footerMenu = await getGqlData(footerMenuQuery);
  const cleanData = menuDataCleaner(footerMenu);
  return cleanData;
};


function menuDataCleaner(data) {
  if (!data || !data.menuItems || !data.menuItems.edges) {
    throw new Error("Invalid menu data structure");
  }

  const nodes = data?.menuItems?.edges.map((edge) => edge.node);

  // Helper function to find children for a given parent ID
  const findChildren = (parentId) => {
    const children = nodes
      .filter((node) => node.parentId === parentId)
      .map((child) => ({
        ID: parseInt(atob(child.id).split(":")[1], 10),  // Decode ID
        title: child.label,
        url: child.uri,
        children: findChildren(child.id),  // Recursively find children
      }));

    // If no children, return an empty array
    return children.length > 0 ? children : [];
  };

  // Build the tree structure from top-level items (parentId === null)
  const menuTree = nodes
    .filter((node) => node.parentId === null)
    .map((item) => ({
      ID: parseInt(atob(item.id).split(":")[1], 10),  // Decode ID
      title: item.label,
      url: item.uri,
      children: findChildren(item.id),  // Recursively build the children
    }));

  return menuTree;
}


