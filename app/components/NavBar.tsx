import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
      <li><a><NavBarItem pageLink="/project" pageName= "project"/></a></li>
      <li><a><NavBarItem pageLink="/settings" pageName="settings"/></a></li>
      </ul>
    </div>
  );
}
