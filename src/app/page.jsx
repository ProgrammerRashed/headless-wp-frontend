import { getPageData } from "../../graphql/Components";
import RenderBlocksHelper from "../../utils/RenderBlocksHelper";

export default async function Home() {
  const pageData = await getPageData("/");
 
  return (
    <div>
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}
