"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { DATA } from "@/data/resume";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuItemClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === "body") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const headerElement = document.querySelector("header");
      const headerHeight = headerElement ? headerElement.offsetHeight : 0;
      const offset = headerHeight + 20;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-background z-50 border-b border-border transition-all duration-300 ease-in-out">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div
            className="flex items-center space-x-4 cursor-pointer"
            onClick={(e) => handleMenuItemClick(e, "body")}
          >
            <Avatar className="size-10 border">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            </Avatar>
            <span className="text-lg font-semibold">
              {DATA.name.split(" ").slice(0, 2).join(" ")}
            </span>
          </div>

          {/* Menu toggle button */}
          <button
            className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary transition-transform duration-300 hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 transition-transform duration-300 rotate-180" />
            ) : (
              <Menu className="w-6 h-6 transition-transform duration-300 rotate-0" />
            )}
          </button>

          {/* Navigation menu */}
          <nav
            className={`md:flex md:items-center md:space-x-6 ${
              isOpen
                ? "absolute top-full left-0 w-full bg-background translate-y-0 border-b border-border"
                : "hidden md:flex -translate-y-full md:translate-y-0"
            } transition-all duration-300 ease-in-out z-50`}
          >
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0 text-sm font-medium">
              <Link
                href="#about"
                className="hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => handleMenuItemClick(e, "#about")}
              >
                About
              </Link>
              <Link
                href="#work"
                className="hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => handleMenuItemClick(e, "#work")}
              >
                Work
              </Link>
              <Link
                href="#education"
                className="hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => handleMenuItemClick(e, "#education")}
              >
                Education
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => handleMenuItemClick(e, "#skills")}
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="hover:text-primary transition-colors duration-300 ease-in-out transform hover:scale-105"
                onClick={(e) => handleMenuItemClick(e, "#projects")}
              >
                Projects
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Overlay layer */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}