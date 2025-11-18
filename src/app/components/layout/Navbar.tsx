"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image 
                src="/images/logo.png" 
                alt="B&R Marine Energy Logo" 
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold" style={{ color: 'rgb(107, 42, 0)' }}>
              B&R Marine Energy
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: isActive('/') ? 'bold' : 'normal',
                borderBottom: isActive('/') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: isActive('/about') ? 'bold' : 'normal',
                borderBottom: isActive('/about') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              About
            </Link>
            <Link 
              href="/operations" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: isActive('/operations') ? 'bold' : 'normal',
                borderBottom: isActive('/operations') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              Operations
            </Link>
            <Link 
              href="/projects" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: pathname.startsWith('/projects') ? 'bold' : 'normal',
                borderBottom: pathname.startsWith('/projects') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              Projects
            </Link>
            <Link 
              href="/equipment" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: isActive('/equipment') ? 'bold' : 'normal',
                borderBottom: isActive('/equipment') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              Equipment
            </Link>
            <Link 
              href="/minerals" 
              className="hover:opacity-70"
              style={{ 
                color: 'rgb(107, 42, 0)',
                fontWeight: isActive('/minerals') ? 'bold' : 'normal',
                borderBottom: isActive('/minerals') ? '2px solid rgb(224, 151, 65)' : 'none'
              }}
            >
              Minerals
            </Link>
            <Link 
              href="/investment" 
              className="px-6 py-2 rounded-lg text-white hover:opacity-90"
              style={{ 
                backgroundColor: 'rgb(224, 151, 65)',
                boxShadow: isActive('/investment') ? '0 4px 0 0 rgb(107, 42, 0)' : 'none'
              }}
            >
              Invest
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            style={{ color: 'rgb(107, 42, 0)' }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: isActive('/') ? 'bold' : 'normal'
                }}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: isActive('/about') ? 'bold' : 'normal'
                }}
              >
                About
              </Link>
              <Link 
                href="/operations" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: isActive('/operations') ? 'bold' : 'normal'
                }}
              >
                Operations
              </Link>
              <Link 
                href="/projects" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: pathname.startsWith('/projects') ? 'bold' : 'normal'
                }}
              >
                Projects
              </Link>
              <Link 
                href="/equipment" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: isActive('/equipment') ? 'bold' : 'normal'
                }}
              >
                Equipment
              </Link>
              <Link 
                href="/minerals" 
                style={{ 
                  color: 'rgb(107, 42, 0)',
                  fontWeight: isActive('/minerals') ? 'bold' : 'normal'
                }}
              >
                Minerals
              </Link>
              <Link 
                href="/investment" 
                className="px-6 py-2 rounded-lg text-white text-center"
                style={{ backgroundColor: 'rgb(224, 151, 65)' }}
              >
                Invest
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}