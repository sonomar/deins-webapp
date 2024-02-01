import Link from "next/link";

type INavBarItemProps = {
  pageLink: string;
  pageName: string;
};

export default function NavBarItem(props:INavBarItemProps) {
  return (
    <Link href={props.pageLink}>{props.pageName}</Link>
    
  )
}
