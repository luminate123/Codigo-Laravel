"use client"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";



export default function functionNavbarComponent() {
    const pathname = usePathname()
    return (
        <Navbar>
            <NavbarBrand>
                <p className="font-bold text-inherit">Empresa</p>
            </NavbarBrand>
            <NavbarContent justify="end" >
                <NavbarItem >
                    <Link href="/" className={`${pathname === '/' ? 'text-blue-600' : ''}`}>
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/servicios" className={`${pathname === '/servicios' ? 'text-blue-600' : ''}`}>
                        <p>Servicios</p>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/proyectos" className={`${pathname === '/proyectos' ? 'text-blue-600' : ''}`}>
                        Proyectos
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link href="/clientes" className={`${pathname === '/clientes' ? 'text-blue-600' : ''}`}>
                        Clientes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/blog" className={`${pathname === '/blog' ? 'text-blue-600' : ''}`}>
                        Blog
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/contacto" className={`${pathname === '/contacto' ? 'text-blue-600' : ''}`}>
                        Contacto
                    </Link>
                </NavbarItem>
            </NavbarContent>

        </Navbar>
    )
}

