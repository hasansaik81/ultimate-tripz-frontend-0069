"use client";
import { useState, useEffect } from "react";
import { useCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAppSelector } from "@/src/redux/hooks";
import { Link } from "@nextui-org/link";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { ThemeSwitch } from "../theme-switch";

const menuItems = [
  "Profile",
  "Dashboard",
  "Activity",
  "Analytics",
  "System",
  "Deployments",
  "My Settings",
  "Team Settings",
  "Help & Feedback",
  "Log Out",
];

const links = [
  {
    title: "About us",
    href: "/about-us",
    secure: false,
  },
  {
    title: "Contact us",
    href: "#",
    secure: false,
  },
  {
    title: "Profile",
    href: "/profile",
    secure: true,
  },
  {
    title: "Dashboard",
    href: "#",
    secure: true,
  },
];

const CustomNavbar = () => {
  const user = useAppSelector(useCurrentUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering user-specific content
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return nothing or a loading spinner if needed, until the component is mounted
    return null;
  }

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="start">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            ACMEY
          </Link>
        </NavbarBrand>
      </NavbarContent>
      {/* large */}
      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <NavbarBrand>
          <Link href="/" className="font-bold text-inherit">
            Ultimate Tripz
          </Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {links.map((item, index) => {
          if (item.secure && !user) return null;
          return (
            <NavbarItem key={index}>
              <Link color="foreground" href={item.href}>
                {item.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        {!user ? (
          <NavbarItem className="hidden lg:flex">
            <Link href="/login">Sign in</Link>
          </NavbarItem>
        ) : (
          <NavbarItem className="hidden lg:flex">
            <Button>Logout</Button>
          </NavbarItem>
        )}
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>

      {/* small */}
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={index}>
            <Link className="w-full" href="#" size="lg">
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
};

export default CustomNavbar;
