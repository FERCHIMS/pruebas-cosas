'use client'
import Link from "next/link"
import AnimScroll from "../anim-container/AnimScroll"
import { links } from "./Links"
import { usePathname } from "next/navigation"

const Header = () => {
    const pathName = usePathname()
  return (
    <div className="w-full h-10">
        <AnimScroll>
            {links.map((link) => (
                <li key={link.title} className="">
                    <Link className={`transition-all duration-[1200ms] ${pathName === link.href ? "font-bold" : "font-medium"}`} href={link.href}>{link.title} </Link>
                </li>
            ))}
        </AnimScroll>
    </div>
  )
}

export default Header