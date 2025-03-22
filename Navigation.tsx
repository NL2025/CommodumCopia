"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components"

const NavContainer = styled.nav`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 1rem;
`

const NavLink = styled(Link)<{ $active: boolean }>`
  color: white;
  text-decoration: none;
  font-weight: ${(props) => (props.$active ? "bold" : "normal")};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
  
  ${(props) =>
    props.$active &&
    `
    background-color: rgba(255, 255, 255, 0.2);
    text-decoration: underline;
  `}
`

export default function Navigation() {
  const pathname = usePathname()

  return (
    <NavContainer>
      <NavLink href="/" $active={pathname === "/"}>
        الرئيسية
      </NavLink>
      <NavLink href="/products" $active={pathname === "/products"}>
        المنتجات
      </NavLink>
      <NavLink href="/orders" $active={pathname === "/orders"}>
        الطلبات
      </NavLink>
    </NavContainer>
  )
}

