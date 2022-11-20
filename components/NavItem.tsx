import Link from "next/link"

type NavItemProps = {
    text: string,
    href: string,
}

export default function NavItem(props: NavItemProps) {

    return(
        <Link href={props.href} className='nav_link'>
            {props.text}
        </Link>
    )
}