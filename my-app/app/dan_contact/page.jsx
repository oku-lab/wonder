"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookingsPage() {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white font-sans">

      {/* NAV */}
      <nav className="bg-black text-white py-4 px-5 md:px-12 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image 
            src="/WS 1.png" 
            alt="Wonderskill Logo" 
            width={100} 
            height={100} 
            className="object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-widest">
          <Link href="/" className="hover:text-gray-300 transition">HOME</Link>
          <Link href="/dan_adout" className="hover:text-gray-300 transition">ABOUT</Link>
          <Link href="/dan_solution" className="hover:text-gray-300 transition">SOLUTION</Link>
          <Link href="/dan_contact" className="hover:text-gray-300 transition">CONTACT</Link>
        </ul>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white p-2 focus:outline-none"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="w-8 h-8" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-700">
          <ul className="flex flex-col gap-6 text-center text-lg font-medium">
            <Link 
              href="/daniel" 
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="/dan_adout" 
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              ABOUT
            </Link>
            <Link 
              href="/dan_contact" 
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              SOLUTION
            </Link>
            <Link 
              href="/dan_solution" 
              className="hover:text-gray-300 transition py-2"
              onClick={() => setIsOpen(false)}
            >
              CONTACT
            </Link>
          </ul>
        </div>
      )}
    </nav>

      {/* BOOKINGS SECTION */}
      <section className="relative overflow-hidden px-5 md:px-6 py-12 md:py-16">
       <img
            src="/treble clef.jpg"
            alt="Music wave"
            className="absolute top-[-40px] right-[-40px] w-[200px] md:w-[350px] lg:w-[4x50px] opacity-70 pointer-events-none music-wave rounded-full"
          />
        <p className="text-xs font-semibold tracking-[2px] uppercase text-gray-500 mb-10">BOOKINGS</p>

        {/* Two Column Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">

          {/* Music Performance */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 uppercase mb-6">MUSIC PERFORMANCE</h2>

            <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden shadow mb-8">
              <img
                src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80"
                alt="Music Performance"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="border-2 border-black text-black font-bold text-sm tracking-[2px] uppercase px-10 py-4 hover:bg-black hover:text-white transition">
              BOOK SESSION
            </button>
          </div>

          {/* Music Education */}
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-700 uppercase mb-6">MUSIC EDUCATION</h2>

            <div className="relative w-full aspect-[16/10] md:aspect-[4/3] rounded-xl overflow-hidden shadow mb-8">
              <img
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=800&q=80"
                alt="Music Education"
                className="w-full h-full object-cover"
              />
            </div>

            <button className="border-2 border-black text-black font-bold text-sm tracking-[2px] uppercase px-10 py-4 hover:bg-black hover:text-white transition">
              MAKE ENQUIRY
            </button>
          </div>

        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="px-5 md:px-6 py-10 bg-gray-50">
        <p className="text-xs font-semibold tracking-[2px] uppercase text-gray-500 mb-6">CONTACT</p>

        <p className="text-base md:text-lg leading-relaxed text-gray-600 max-w-3xl">
          We work with learners, institutions, organizations, and communities across Africa and the diaspora 
          to deliver structured, relevant, and high-quality music education and performance solutions.
        </p>
      </section>

      {/* CONTACT US BANNER */}
      <section className="relative h-[320px] md:h-[420px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1510915361894-db8b60106cb1?w=1400&q=80"
          alt="Contact background"
          className="absolute inset-0 w-full h-full object-cover brightness-50"
        />

        {/* Overlay Button */}
        <button className="relative z-10 border-2 border-white text-white font-bold tracking-[3px] text-sm px-12 md:px-16 py-5 rounded-full hover:bg-white hover:text-black transition-all">
          CONTACT US
        </button>
      </section>

      {/* FOOTER SPACER */}
      <div className="h-16 bg-white" />

    </main>
  );
}