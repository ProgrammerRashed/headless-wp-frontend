import { notFound } from "next/navigation";
import { getAvailableSlugs, getPageData } from "../../../graphql/Components";
import RenderBlocksHelper from "../../../utils/RenderBlocksHelper";

export default async function Page({ params }) {
  const slugArray = (await params).slug;
  const slug = slugArray.join("/"); 

  // Fetch all available slugs
  const availableSlugs = await getAvailableSlugs();


  if (!availableSlugs.includes(slug)) {
    notFound();
  }

  // Fetch the page data for the matching slug
  const pageData = await getPageData(slug);

  // Render the page with the blocks data
  return (
    <div>
      <RenderBlocksHelper blocks={pageData} />
    </div>
  );
}
