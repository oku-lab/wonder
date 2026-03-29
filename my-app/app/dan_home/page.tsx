"use client";

import Image from "next/image";
import Link from "next/link"; 
import { useState } from "react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="min-h-screen bg-white font-sans">

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
          <Link href="/dan_home" className="hover:text-gray-300 transition">HOME</Link>
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

      {/* ── HERO SECTION ── */}
      <section id="home" className="relative overflow-hidden pt-16 md:pt-24 pb-12 md:pb-20 bg-gradient-to-br from-gray-50 to-white">
        <img
            src="/treble clef.jpg"
            alt="Music wave"
            className="absolute top-[-40px] right-[-40px] w-[300px] md:w-[450px] lg:w-[550px] opacity-70 pointer-events-none music-wave rounded-full"
          />
        <div className="max-w-5xl mx-auto px-5 md:px-6">

          <div className="my-10 md:my-16 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900 font-medium max-w-4xl mx-auto">
              Wonderskill International is an education and music-focused institution committed to
              developing people, systems, and learning solutions through music, leadership, and culture.
            </h1>
          </div>

          {/* Hero Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl w-full">
            <div className="relative w-full aspect-[16/10] md:aspect-[16/9]">
              <Image
                src="/piano.png"
                alt="Young student playing piano"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6 md:p-10">
                <p className="text-white text-base md:text-xl font-medium">
                  Building tomorrow through music today
                </p>
              </div>
            </div>
          </div>

          <div className="my-10 md:my-16 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl leading-tight text-gray-900 font-medium max-w-4xl mx-auto">
              We work with learners, institutions, organizations, and communities across Africa and the diaspora
              to deliver structured, relevant, and high-quality music education and performance solutions.
            </h1>
          </div>
        </div>
      </section>

      {/* ── GALLERY CARDS ── */}
     <div className="px-5 md:px-6 pb-10">
  <div className="grid grid-cols-1 gap-6">

    {/* Card */}
    {[ "/girl.png", "/group.png", "/female.png", "/girlP.png" ].map((src, i) => (
      <div key={i} className="relative rounded-2xl overflow-hidden group shadow-2xl h-[400px] md:h-[500px] w-full">
        
        <Image
          src={src}
          alt="Music"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 to-transparent transition-opacity duration-500 group-hover:opacity-90" />

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-5 md:p-8 flex items-end justify-between">
          
          {/* TEXT (LEFT) */}
          <h3 className="text-white text-xl md:text-2xl font-bold leading-tight max-w-[60%]">
            Music<br />Performances<br />& Production
          </h3>

          {/* BUTTON (RIGHT) */}
          <button className="shrink-0 text-white font-semibold text-sm md:text-base px-6 py-3 rounded-full border-2 border-white hover:bg-white hover:text-black transition-all">
            VIEW GALLERY
          </button>

        </div>
      </div>
    ))}

  </div>
</div>

      {/* ── SOLUTION CARDS ── */}
      <section id="solution" className="py-16 md:py-24 bg-gray-900 text-white">
  <div className="max-w-6xl mx-auto px-5 md:px-6">
    <div className="grid md:grid-cols-3 gap-6 md:gap-8">

      {/* Card 1 */}
      <div className="group relative rounded-2xl overflow-hidden bg-black aspect-[4/5] shadow-2xl">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"
            alt="Video Automation"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Video<br />Automation &<br />Production
          </h3>
          <button className="mt-4 w-fit bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition">
            VIEW SOLUTION →
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="group relative rounded-2xl overflow-hidden bg-black aspect-[4/5] shadow-2xl">
        <div className="absolute inset-0">
          <img
  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  alt="Online Learning"
  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
/>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Online<br />Learning<br />Solutions
          </h3>
          <button className="mt-4 w-fit bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition">
            VIEW SOLUTION →
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="group relative rounded-2xl overflow-hidden bg-black aspect-[4/5] shadow-2xl">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
            alt="Curriculum"
            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-4">
            Curriculum<br />Development &<br />Consulting
          </h3>
          <button className="mt-4 w-fit bg-white text-black px-8 py-3.5 rounded-full font-semibold hover:bg-gray-200 transition">
            VIEW SOLUTION →
          </button>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ── MUSIC PERFORMANCE SECTION ── */}
      <section className="py-20 md:py-28 bg-black text-white">
        <div className="max-w-5xl mx-auto px-5 md:px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10 leading-tight">
            Music<br />Performance &<br />Training
          </h2>
          <div className="aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl mb-12 border border-gray-700 flex items-center justify-center text-gray-400">
            [Video or Image Placeholder – Music Performance]
          </div>
          <button className="bg-white text-black text-lg md:text-xl font-bold px-12 py-5 rounded-full hover:bg-gray-100 transition">
            BOOK MUSIC PERFORMANCE
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer id="contact" className="py-12 bg-gray-900 text-gray-400 text-center">
        <div className="max-w-7xl mx-auto px-5">
          <p>© {new Date().getFullYear()} Wonderskill International. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}

