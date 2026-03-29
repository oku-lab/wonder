"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
    const [isOpen, setIsOpen] = useState(false);
  
  return (
    <main className="min-h-screen bg-white font-sans">
      {/* NAVIGATION */}
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

      {/* ABOUT SECTION */}
      <section className="relative overflow-hidden max-w-5xl mx-auto px-6 py-16">
        <img
            src="/treble clef.jpg"
            alt="Music wave"
            className="absolute top-[-40px] right-[-40px] w-[300px] md:w-[450px] lg:w-[550px] opacity-70 pointer-events-none music-wave rounded-full"
          />
        <p className="text-xl font-semibold tracking-[3px] uppercase text-gray-500 mb-5">ABOUT</p>
        
        <p className="text-lg leading-relaxed text-gray-500  mb-8">
          Wonderskill International is an education and music consultancy<br/> organization focused on building structured learning systems,<br/> 
          developing talent, and supporting institutions through music-<br/> based education and performance solutions.
        </p>

        {/* Hero Image */}
        <div className="relative w-full h-fit rounded-lg overflow-hidden mb-16 shadow-xl">
          <Image 
            src="/witch.png" 
            alt="Man with guitar"
            height={1000}
            width={1000}
          />
        </div>
        <div>
          
        </div>

        <div className="flex justify-center flex-col items-center">

        {/* MISSION */}
        <div className="px-35 grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/pexel.png" 
                alt="Mission Image"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>

          <div className="md:col-span-7">
            <button className="bg-black text-white inLinkne-block px-20 py-5 rounded-lg hover:border-2 hover:text-black hover:bg-white text-md font-bold tracking-widest mb-4">
              MISSION
            </button>
            <p className="text-md leading-relaxed text-gray-500">
              To provide accessible,<br/> structured, and culturally<br/> relevant music education,<br/> performance, and consulting<br/> services 
              that support learning,<br/> creativity, and leadership development.
            </p>
          </div>
        </div>
        <div className="px-35 grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-7  items-end">
            <button className="bg-black text-white inLinkne-block px-20 py-5 rounded-lg hover:border-2 hover:text-black hover:bg-white text-md font-bold tracking-widest mb-4">
              VISION
            </button>
              <p className="text-md leading-relaxed text-gray-500">
                To provide accessible,<br/> structured, and culturally<br/> relevant music education,<br/> performance, and consulting<br/> services 
                that support learning,<br/> creativity, and leadership development.
              </p>
          </div>
          <div className="md:col-span-5">
            <div className="w-full aspect-[4/3] rounded-lg overflow-hidden shadow-md">
              <Image 
                src="/pexel.png" 
                alt="Mission Image"
                width={1000}
                height={1000}
                className=""
              />
            </div>
          </div>

        </div>

        {/* VISION */}
        
        </div>
      </section>

      {/* CORE VALUES BANNER */}
      <div className="bg-black py-10">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-white text-3xl font-bold tracking-[3px] uppercase">CORE VALUES</h2>
        </div>
      </div>

      {/* CORE VALUES CONTENT */}
      <section className="max-w-5xl mx-auto px-30 py-16 space-y-20">

        {/* Cultural Relevance */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5 flex gap-4">
            <div className="flex-1 aspect-[4/5] rounded-lg overflow-hidden shadow">
              <Image src="/pexel.png" alt="VioLinkn" width={400} height={500} className="object-cover" />
            </div>
            <div className="flex-1 aspect-[4/5] rounded-lg overflow-hidden shadow">
              <Image src="/pexel.png" alt="Drum" width={400} height={500} className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 pt-3">
            <h3 className="text-xl font-bold mb-4">Cultural Relevance</h3>
            <p className="text-gray-600 leading-relaxed">
              We celebrate every culture by making music feel famiLinkar, inclusive, and connected to your roots so you can learn, 
              create, and express yourself in a way that truly reflects who you are.
            </p>
          </div>
        </div>

        {/* Excellence */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We are committed to the highest standards — deLinkvering quaLinkty learning experiences that inspire growth, 
              mastery, and continuous improvement at every step.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <Image src="https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?w=800" alt="Accordion" width={800} height={450} className="object-cover" />
            </div>
          </div>
        </div>

        {/* Integrity */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <Image src="https://images.unsplash.com/photo-1524230572899-a752b3835840?w=800" alt="Integrity" width={800} height={450} className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 pt-3">
            <h3 className="text-xl font-bold mb-4">Integrity</h3>
            <p className="text-gray-600 leading-relaxed">
              We act with honesty and transparency — building trust by doing what’s right, keeping our word, 
              and putting our learners first in everything we do.
            </p>
          </div>
        </div>

        {/* Excellence (second block) */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <h3 className="text-xl font-bold mb-4">Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              We pursue the highest standards in everything we do — creating impactful learning experiences 
              that empower every user to grow, improve, and thrive.
            </p>
          </div>
          <div className="md:col-span-5 flex gap-4">
            <div className="flex-1 aspect-[4/5] rounded-lg overflow-hidden shadow">
              <Image src="/pexel2.png" alt="Accordion 1" width={400} height={500} className="object-cover" />
            </div>
            <div className="flex-1 aspect-[4/5] rounded-lg overflow-hidden shadow">
              <Image src="/pexel2.png" alt="Accordion 2" width={400} height={500} className="object-cover" />
            </div>
          </div>
        </div>

        {/* Long Term Impact */}
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="aspect-video rounded-lg overflow-hidden shadow">
              <Image src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?w=800" alt="Long Term Impact" width={800} height={450} className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-7 pt-3">
            <h3 className="text-xl font-bold mb-4">Long Term Impact</h3>
            <p className="text-gray-600 leading-relaxed">
              We build for the future — empowering learners with skills, confidence, and creativity that last a Linkfetime 
              and shape lasting musical journeys.
            </p>
          </div>
        </div>

      </section>

 <footer className="bg-black text-gray-400 pext-center text-xs tracking-widest">
        © {new Date().getFullYear()} Wonderskill International. All rights reserved.
      </footer>
    </main>
  );
}