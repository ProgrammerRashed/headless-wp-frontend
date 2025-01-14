import { getMainMenuData } from "../../graphql/Components";

const MainNavigation = async () => {
  const menuData = await getMainMenuData();
  return (
    <div className="w-full py-6">
      <nav className="flex gap-6 align-center justify-start">
        {menuData.map((item) => {
          return <a href={item.url} key={item.ID}>{item.title}</a>;
        })}
      </nav>
    </div>
  );
};

export default MainNavigation;
