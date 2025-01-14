import getGqlData from "../../lib/getGqlData";
import { pageDataQuery } from "../Queries";

export const getPageData = async (uri) => {
    const pageData = await getGqlData(pageDataQuery, { uri });
    return pageData?.nodeByUri?.blocks || [];
};
