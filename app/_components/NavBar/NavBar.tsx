import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
      <li><a><NavBarItem pageLink="/Project" pageName= "Project"/></a></li>
      <li><a><NavBarItem pageLink="/Settings" pageName="Settings"/></a></li>
      <li><a><NavBarItem pageLink="/TestPage" pageName="TestPage"/></a></li>
      </ul>
    </div>
  );
}
