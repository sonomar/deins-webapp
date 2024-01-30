import NavBarItem from "./NavBarItem";

export default function NavBar() {
  return (
    <div className="drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 min-h-full bg-base-200 text-base-content">
      <li><a><NavBarItem /></a></li>
      <li><a><NavBarItem /></a></li>
      </ul>
    </div>
  );
}
