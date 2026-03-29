"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function MusicPage() {
  const eventTypes = [
    "CORPORATE EVENTS",
    "CONFERENCES",
    "AWARD CEREMONIES",
    "PRODUCT LAUNCHES",
    "RELIGIOUS PROGRAMS",
    "PRIVATE CELEBRATIONS",
    "CULTURAL EVENTS",
    "INSTITUTIONAL EVENTS",
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className="bg-white text-gray-900 font-sans min-h-screen">
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
              className="object-contain w-auto h-auto"
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
              className="w-6 h-6 sm:w-8 sm:h-8" 
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
            <ul className="flex flex-col gap-4 sm:gap-6 text-center text-base sm:text-lg font-medium">
              <Link href="/dan_home" className="hover:text-gray-300 transition py-2" onClick={() => setIsOpen(false)}>HOME</Link>
              <Link href="/dan_adout" className="hover:text-gray-300 transition py-2" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link href="/dan_contact" className="hover:text-gray-300 transition py-2" onClick={() => setIsOpen(false)}>SOLUTION</Link>
              <Link href="/dan_solution" className="hover:text-gray-300 transition py-2" onClick={() => setIsOpen(false)}>CONTACT</Link>
            </ul>
          </div>
        )}
      </nav>

      {/* MUSIC SECTION */}
      <section className=" relative overflow-hidden px-5 md:px-12 pt-14 pb-10">
        <img
            src="/treble clef.jpg"
            alt="Music wave"
            className="absolute top-[-40px] right-[-40px] w-[280px] md:w-[380px] lg:w-[490px] opacity-70 pointer-events-none music-wave rounded-full"
          />
        <p className="text-lg sm:text-xl font-semibold tracking-[3px] uppercase text-gray-500 mb-5">MUSIC</p>

        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-500 mb-10 max-w-3xl">
          We provide high-quality music performance solutions through orchestra, band, choir, and ensemble performances for corporate, private, religious, and institutional events.
        </p>

        {/* Orchestra — two images side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div className="h-56 sm:h-64 md:h-80 bg-gray-900 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1465847899084-d164df4dedc6?w=800&q=80"
              alt="Orchestra 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-56 sm:h-64 md:h-80 bg-gray-800 rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=800&q=80"
              alt="Orchestra 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <button className="border border-gray-900 text-gray-900 text-xs sm:text-sm font-bold rounded-lg tracking-[2px] uppercase px-8 sm:px-10 md:px-12 py-3 bg-white hover:bg-gray-900 hover:text-white transition-all">
          ORCHESTRA
        </button>

        <hr className="border-gray-200 my-12" />
      </section>

      {/* BAND */}
      <section className="px-5 md:px-12 pb-10">
        <div className="h-56 sm:h-64 md:h-96 bg-gray-900 rounded-xl overflow-hidden mb-6">
          <img
            src="/pexel2.png"
            alt="Band performance"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="border border-gray-900 text-gray-900 text-xs sm:text-sm font-bold rounded-lg tracking-[2px] uppercase px-8 sm:px-10 md:px-12 py-3 bg-white hover:bg-gray-900 hover:text-white transition-all">
          BAND
        </button>

        <hr className="border-gray-200 my-12" />
      </section>

      {/* CHOIR */}
      <section className="px-5 md:px-12 pb-10">
        <div className="h-56 sm:h-64 md:h-96 bg-gray-800 rounded-xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80"
            alt="Choir performance"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="border border-gray-900 text-gray-900 text-xs sm:text-sm font-bold rounded-lg tracking-[2px] uppercase px-8 sm:px-10 md:px-12 py-3 bg-white hover:bg-gray-900 hover:text-white transition-all">
          CHOIR
        </button>

        <hr className="border-gray-200 my-12" />
      </section>

      {/* ENSEMBLE */}
      <section className="px-5 md:px-12 pb-14">
        <div className="h-56 sm:h-64 md:h-96 bg-gray-700 rounded-xl overflow-hidden mb-6">
          <img
            src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
            alt="Ensemble performance"
            className="w-full h-full object-cover"
          />
        </div>
        <button className="border border-gray-900 text-gray-900 text-xs sm:text-sm font-bold rounded-lg tracking-[2px] uppercase px-8 sm:px-10 md:px-12 py-3 bg-white hover:bg-gray-900 hover:text-white transition-all">
          ENSEMBLE
        </button>
      </section>

      {/* TYPES OF EVENTS */}
      <section className="px-5 md:px-12 pb-16">
        <p className="text-xs sm:text-sm tracking-[2px] uppercase text-gray-600 mb-2">We cover this</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wide uppercase text-gray-900 mb-10">
          TYPES OF EVENTS
        </h2>

        <div className="space-y-6">
          {eventTypes.map((event, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 py-3 border-b-2 border-gray-600 rounded-2xl last:border-none p-2"
            >
              <span className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wider uppercase text-gray-800 flex-1">
                {event}
              </span>

              <button className="border-2 border-gray-900 text-gray-700 text-xs sm:text-sm font-semibold tracking-[1.5px] uppercase px-6 sm:px-8 py-3 rounded-full hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all whitespace-nowrap self-start md:self-auto">
                VIEW GALLERY
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MUSIC EDUCATION & TRAINING */}
      <section className="px-5 md:px-12 pb-20 bg-gray-50 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-widest uppercase text-gray-400 mb-6">
            MUSIC EDUCATION & TRAINING
          </h2>

          <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 max-w-3xl mb-12">
            Wonderskill International provides structured music education and training services for individuals, schools, churches, and organizations through in-person, online, and hybrid learning models.
          </p>

          {/* Three Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["INDIVIDUALS", "GROUPS", "HYBRID"].map((label) => (
              <div
                key={label}
                className="h-64 sm:h-72 md:h-80 bg-gray-200 rounded-2xl flex items-end justify-center p-8 text-center hover:bg-gray-300 transition-colors group"
              >
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 group-hover:scale-105 transition-transform">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER SPACER */}
      <div className="h-20 bg-white" />
    </main>
  );
}