"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import './styles.css';

export default function ProfileLayout({children}: {
    children: React.ReactNode
}) {
    const navLink = [
        {name: "Register", href: '/register'},
        {name: "Login", href: '/login'},
    ];
    const pathname = usePathname();
    return (
        <>
            <div>
                {navLink.map((e,index)=>{
                    const isActive = pathname.startsWith(e.href);
                    return (<nav key={index}>
                        <Link href={e.href} className={isActive ? "text-black-500 font-bold" : "text-blue-500"}>{e.name}</Link>
                    </nav>)
                }

                    
                )}
            </div>
            {children}
        </>
    );
}