'use client';

import React, { useState, useRef, useEffect } from 'react';

// Custom inline SVG assets for premium, ultra-luxury aesthetics
const LogoSVG = ({ className = 'h-12 w-auto' }: { className?: string }) => {
  return (
    <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DFC373" />
          <stop offset="50%" stopColor="#C9A84C" />
          <stop offset="100%" stopColor="#96792A" />
        </linearGradient>
      </defs>
      {/* Interlinked Luxury House Gables */}
      <path d="M 120 130 L 200 60 L 250 103" stroke="url(#goldGrad)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M 210 110 L 280 50 L 380 130" stroke="url(#goldGrad)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Divided Architectural Window Grid 1 */}
      <rect x="160" y="93" width="22" height="18" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
      <line x1="171" y1="93" x2="171" y2="111" stroke="url(#goldGrad)" strokeWidth="1.5" />
      <line x1="160" y1="102" x2="182" y2="102" stroke="url(#goldGrad)" strokeWidth="1.5" />

      {/* Divided Architectural Window Grid 2 */}
      <rect x="275" y="83" width="22" height="18" stroke="url(#goldGrad)" strokeWidth="2" fill="none" />
      <line x1="286" y1="83" x2="286" y2="101" stroke="url(#goldGrad)" strokeWidth="1.5" />
      <line x1="275" y1="92" x2="297" y2="92" stroke="url(#goldGrad)" strokeWidth="1.5" />

      {/* Modern Center Pillar Connector */}
      <path d="M 220 100 L 220 145" stroke="url(#goldGrad)" strokeWidth="5" strokeLinecap="round" />

      {/* Golden Swept Underline Curve */}
      <path d="M 100 140 C 170 195, 310 195, 400 145" stroke="url(#goldGrad)" strokeWidth="4.5" strokeLinecap="round" fill="none" />
      
      {/* Premium Texts */}
      <text x="250" y="202" fontFamily="var(--font-serif), serif" fontSize="56" fontWeight="700" letterSpacing="6" fill="url(#goldGrad)" textAnchor="middle">Shree</text>
      <text x="250" y="226" fontFamily="var(--font-sans), sans-serif" fontSize="11" fontWeight="600" letterSpacing="8" fill="#E5E5E5" textAnchor="middle">INTERIOR DESIGNER</text>
    </svg>
  );
};

// Types & Interfaces
interface ShowcaseItem {
  id: number;
  title: string;
  videoUrl: string;
  fallbackImage: string;
  area: string;
  lighting: string;
  theme: string;
  hardware?: string;
  finish?: string;
  acoustics?: string;
  bedframe?: string;
}

export default function LuxuryDesignStudio() {
  // Video player control state array for two walkthrough items
  const [isPlaying, setIsPlaying] = useState<boolean[]>([false, false]);
  const videoRefs = [
    useRef<HTMLVideoElement | null>(null),
    useRef<HTMLVideoElement | null>(null),
  ];

  // Buttery-smooth passive high-performance scroll tracker for parallax elements
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Active Category state for Materials & Blueprints Tray
  const [activeTab, setActiveTab] = useState<'blueprint' | 'wireframe' | 'textures'>('textures');
  
  // Selected texture detail modal/selector state
  const [selectedTexture, setSelectedTexture] = useState<string>('marble');

  // Contact Inquiry state machine
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    fullName: '',
    contactNo: '',
    siteLocation: 'Kharghar',
    budgetTier: '₹25L - ₹50L',
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.contactNo) {
      alert('Kindly share your Full Name and Active Contact to proceed.');
      return;
    }
    setFormState('loading');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  const toggleVideoPlayback = (index: number) => {
    const video = videoRefs[index].current;
    if (video) {
      if (isPlaying[index]) {
        video.pause();
      } else {
        // Attempt playback and handle any autolock behaviors
        video.play().catch(() => {});
      }
      const updatedStates = [...isPlaying];
      updatedStates[index] = !updatedStates[index];
      setIsPlaying(updatedStates);
    }
  };

  // Sync state if video events change playback status directly inside wrapper
  const handleVideoStateSync = (index: number, state: boolean) => {
    const updated = [...isPlaying];
    updated[index] = state;
    setIsPlaying(updated);
  };

  return (
    <div className="relative min-h-screen text-[#F5F5F5] font-sans overflow-x-hidden selection:bg-[#C9A84C]/30 selection:text-[#C9A84C]">
      
      {/* Absolute Ambient Parallax Halos (₹10,000+ Elite Aesthetic depth) */}
      <div 
        className="absolute rounded-full bg-gradient-to-br from-[#C9A84C]/5 to-transparent blur-3xl pointer-events-none transition-transform duration-100 ease-out z-0"
        style={{
          width: '600px',
          height: '600px',
          top: '900px',
          right: '-10%',
          transform: `translateY(${scrollY * 0.12}px)`,
        }}
      />
      <div 
        className="absolute rounded-full bg-gradient-to-br from-[#96792A]/5 to-transparent blur-3xl pointer-events-none transition-transform duration-100 ease-out z-0"
        style={{
          width: '500px',
          height: '500px',
          top: '2100px',
          left: '-10%',
          transform: `translateY(${-scrollY * 0.08}px)`,
        }}
      />
      <div 
        className="absolute rounded-full bg-gradient-to-br from-[#DFC373]/3 to-transparent blur-3xl pointer-events-none transition-transform duration-100 ease-out z-0"
        style={{
          width: '740px',
          height: '740px',
          top: '3200px',
          right: '-5%',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      
      {/* Raw custom styles, hardware keyframes, 3D perspective shifts */}
      <style dangerouslySetInnerHTML={{ __html: `
        :root {
          --obsidian: #050505;
          --matte: #0D0D0D;
          --gold: #C9A84C;
          --platinum: #E5E7EB;
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slowZoom {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes goldGlow {
          0%, 100% { box-shadow: 0 0 15px rgba(201, 168, 76, 0.15); border-color: rgba(201, 168, 76, 0.2); }
          50% { box-shadow: 0 0 30px rgba(201, 168, 76, 0.4); border-color: rgba(201, 168, 76, 0.7); }
        }
        @keyframes pulse-gold {
          0% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(201, 168, 76, 0); }
          100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0); }
        }
        @keyframes techScan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); opacity: 0.6; }
          50% { transform: translateY(10px); opacity: 1; }
        }
        .serif {
          font-family: var(--font-serif), serif;
        }
        .letter-spaced {
          letter-spacing: 0.3em;
        }
        .glass-panel {
          backdrop-filter: blur(12px);
          background: rgba(13, 13, 13, 0.7);
          border: 1px solid rgba(201, 168, 76, 0.2);
        }
        .gold-gradient {
          background: linear-gradient(135deg, #C9A84C 0%, #8A6E2D 100%);
        }
        .hero-vignette {
          background: radial-gradient(circle at center, transparent 0%, rgba(5,5,5,0.8) 100%);
        }
        .ambient-zoom {
          animation: zoom 20s infinite alternate ease-in-out;
        }
        .pulse-gold {
          animation: pulse-gold 2s infinite;
        }
        .tab-active {
          border-bottom: 2px solid var(--gold);
          color: var(--gold);
        }
        .animate-fade-up {
          animation: fadeUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slow-zoom {
          animation: slowZoom 25s infinite ease-in-out;
        }
        .animate-gold-glow {
          animation: goldGlow 4s infinite ease-in-out;
        }
        .animate-scan {
          animation: techScan 6s infinite linear;
        }
        .animate-bounce-slow {
          animation: bounceSlow 2s infinite ease-in-out;
        }
        .text-shadow-elegant {
          text-shadow: 0 4px 12px rgba(0,0,0,0.8), 0 0 40px rgba(201, 168, 76, 0.15);
        }
        .gold-border-hover:hover {
          border-color: #C9A84C;
          box-shadow: 0 0 20px rgba(201, 168, 76, 0.25);
        }
      `}} />

      {/* 1. TRANSPARENT FLOATING EDITORIAL NAVBAR */}
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-4">
          <nav className="glass-panel rounded-sm px-4 md:px-8 py-3 flex items-center justify-between">
            {/* 100% Matching Brand Logo & Identity */}
            <a href="#hero" className="flex items-center gap-1.5 sm:gap-3 group shrink-0">
              <div className="w-12 sm:w-16 h-10 sm:h-12 flex items-center justify-center shrink-0">
                <svg viewBox="90 40 320 125" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <defs>
                    <linearGradient id="goldGradNav" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#DFC373" />
                      <stop offset="50%" stopColor="#C9A84C" />
                      <stop offset="100%" stopColor="#96792A" />
                    </linearGradient>
                  </defs>
                  
                  {/* Interlinked Luxury House Gables */}
                  <path d="M 120 130 L 200 60 L 250 103" stroke="url(#goldGradNav)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M 210 110 L 280 50 L 380 130" stroke="url(#goldGradNav)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                  
                  {/* Divided Window Grid 1 */}
                  <rect x="160" y="93" width="22" height="18" stroke="url(#goldGradNav)" strokeWidth="2.5" fill="none" />
                  <line x1="171" y1="93" x2="171" y2="111" stroke="url(#goldGradNav)" strokeWidth="2" />
                  <line x1="160" y1="102" x2="182" y2="102" stroke="url(#goldGradNav)" strokeWidth="2" />

                  {/* Divided Window Grid 2 */}
                  <rect x="275" y="83" width="22" height="18" stroke="url(#goldGradNav)" strokeWidth="2.5" fill="none" />
                  <line x1="286" y1="83" x2="286" y2="101" stroke="url(#goldGradNav)" strokeWidth="2" />
                  <line x1="275" y1="92" x2="297" y2="92" stroke="url(#goldGradNav)" strokeWidth="2" />

                  {/* Center Pillar */}
                  <path d="M 220 100 L 220 145" stroke="url(#goldGradNav)" strokeWidth="5.5" strokeLinecap="round" />

                  {/* Golden Swept Underline Curve */}
                  <path d="M 100 140 C 170 195, 310 195, 400 145" stroke="url(#goldGradNav)" strokeWidth="5" strokeLinecap="round" fill="none" />
                </svg>
              </div>
              <div className="flex flex-col select-none shrink-0">
                <span className="serif text-sm sm:text-xl font-bold tracking-[0.2em] sm:tracking-[0.25em] text-white group-hover:text-[#C9A84C] transition-colors leading-none">SHREE</span>
                <span className="text-[6.5px] sm:text-[8.5px] tracking-[0.2em] sm:tracking-[0.3em] text-[#C9A84C]/90 font-semibold mt-0.5 sm:mt-1 leading-none uppercase select-none shrink-0 whitespace-nowrap">INTERIOR DESIGNER</span>
              </div>
            </a>

            {/* Editorial Hotlinks */}
            <div className="hidden md:flex items-center gap-8 text-[10px] tracking-[0.3em] font-semibold uppercase text-stone-300">
              <a href="#hero" className="hover:text-[#C9A84C] relative py-1 group transition-colors">
                HOME
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#trust" className="hover:text-[#C9A84C] relative py-1 group transition-colors">
                METRICS
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#walkthroughs" className="hover:text-[#C9A84C] relative py-1 group transition-colors">
                CINEMATIC
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#blueprints" className="hover:text-[#C9A84C] relative py-1 group transition-colors">
                BLUEPRINTS
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-200 group-hover:w-full"></span>
              </a>
              <a href="#consultation" className="hover:text-[#C9A84C] relative py-1 group transition-colors">
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C9A84C] transition-all duration-200 group-hover:w-full"></span>
              </a>
            </div>

            {/* Action Button: REQUEST BRIEFING */}
            <div className="shrink-0">
              <a 
                href="#consultation" 
                className="pulse-gold inline-block relative overflow-hidden group rounded-sm px-3 md:px-6 py-1.5 md:py-2.5 text-[9px] md:text-[10px] tracking-[0.12em] md:tracking-[0.3em] font-sans uppercase font-bold bg-[#C9A84C] text-black transition-all duration-300 shadow-[0_0_15px_rgba(201,168,76,0.15)] whitespace-nowrap"
                id="cta-nav"
              >
                REQUEST BRIEFING
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* 2. THE FULL-SCREEN IMMERSIVE HERO */}
      <section id="hero" className="relative w-screen h-screen min-h-[600px] flex items-center justify-start overflow-hidden bg-black">
        {/* Ambient Zoom Backdrop */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full relative animate-slow-zoom" style={{ transform: `translateY(${scrollY * 0.18}px)` }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="Elite Residence Interior Backdrop"
              className="w-full h-full object-cover brightness-[0.4]"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Subtle linear-gradient mask & vignette layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-black/80 z-1" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_95%)] opacity-80 z-1" />
        </div>

        {/* Content Container (Asymmetric design) */}
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-32 flex flex-col justify-between h-full pb-16">
          <div className="max-w-[850px] mt-auto mb-auto animate-fade-up">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-[1px] w-12 bg-[#C9A84C]" />
              <span className="text-[11px] font-sans tracking-[0.4em] uppercase text-[#C9A84C] font-semibold">PREMIUM DESIGN STUDIO</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[1.05] text-white tracking-tight text-shadow-elegant">
              REDEFINING <span className="italic font-light text-stone-200">Architectural</span> OPULENCE <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DFC373] via-[#C9A84C] to-[#96792A]">IN NAVI MUMBAI</span>
            </h1>
            
            <p className="mt-8 text-stone-400 font-sans text-sm md:text-base max-w-[550px] leading-relaxed tracking-wide font-light">
              Crafting bespoke cinematic estates, high-end layouts, and grand structural sanctuaries. Formulated for the most discerning residents of Sector 10 Kharghar, Panvel, and across Vashi.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a 
                href="#walkthroughs" 
                className="rounded-sm border border-[#C9A84C] hover:bg-[#C9A84C] hover:text-black transition-all duration-300 text-[#C9A84C] text-[11px] tracking-[0.3em] font-sans px-8 py-4 uppercase font-semibold bg-transparent"
                id="cta-hero-primary"
              >
                PROPERTIES PORTFOLIO
              </a>
              <a 
                href="#consultation" 
                className="text-stone-300 hover:text-white text-[11px] tracking-[0.3em] font-sans px-6 py-4 uppercase font-semibold flex items-center gap-2 group transition-colors"
                id="cta-hero-secondary"
              >
                DISCOVERY BRIEF
                <span className="transform translate-x-0 group-hover:translate-x-2 transition-transform duration-300 text-[#C9A84C]">➔</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            {/* Animated mouse-scroll down indicator */}
            <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] text-stone-500 uppercase font-semibold">
              <div className="w-5 h-8 rounded-full border border-stone-700 relative flex justify-center py-2 bg-black/40">
                <span className="w-1 h-2 rounded-full bg-[#C9A84C] block animate-bounce-slow" />
              </div>
              SCROLL TO ARCHITECTURE
            </div>

            {/* Absolute positioning style status card */}
            <div 
              className="glass-panel rounded-sm p-5 border-[#C9A84C]/25 bg-stone-950/85 max-w-[325px] shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-transform duration-75 ease-out"
              style={{ transform: `translateY(${-scrollY * 0.05}px)` }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] font-sans tracking-[0.25em] uppercase text-stone-400 font-medium">STRUCTURAL PIPELINE</span>
              </div>
              <p className="text-xs font-semibold text-white tracking-wide">Active Construction: Sector 10, Kharghar</p>
              <div className="mt-3 flex items-center justify-between border-t border-white/[0.05] pt-2 text-[9px] font-mono text-stone-500">
                <span>LAT: 19.0270° N</span>
                <span>LON: 73.0549° E</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DYNAMIC METRICS BAR (TRUST ENGINE) */}
      <section id="trust" className="relative z-20 bg-[#0D0D0D] border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 lg:grid-cols-4 divide-y divide-x lg:divide-y-0 divide-white/[0.06]">
          <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center">
            <span className="font-serif text-3xl md:text-5xl font-light text-white leading-none tracking-tight">150+</span>
            <span className="text-[9px] md:text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mt-3">Masterpieces Delivered</span>
          </div>
          <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center">
            <span className="font-serif text-3xl md:text-5xl font-light text-white leading-none tracking-tight flex items-center gap-1">
              4.8 <span className="text-yellow-500 text-2xl">★</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mt-3">Google Business Audit</span>
          </div>
          <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center">
            <span className="font-serif text-3xl md:text-5xl font-light text-white leading-none tracking-tight">8+ Years</span>
            <span className="text-[9px] md:text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mt-3">Elite Structural Legacy</span>
          </div>
          <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center">
            <span className="font-serif text-3xl md:text-5xl font-light text-white leading-none tracking-tight">100%</span>
            <span className="text-[9px] md:text-[10px] text-[#C9A84C] tracking-[0.3em] uppercase mt-3">Fully Turnkey Execution</span>
          </div>
        </div>
      </section>

      {/* 4. THE 3D VIDEO CABINET SHOWCASE */}
      <section id="walkthroughs" className="py-24 md:py-32 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          {/* Section Heading Editorial */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[11px] font-sans tracking-[0.35em] text-[#C9A84C] uppercase mb-3 font-semibold flex items-center gap-2">
                CINEMATIC DIGITAL TOURS
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-normal tracking-tight text-white">
                Cinematic Walkthroughs
              </h2>
            </div>
            <p className="text-stone-400 font-sans text-sm max-w-[450px] leading-relaxed tracking-wide font-light">
              Bespoke spaces designed and meticulously crafted under premium dynamic illumination. Toggle walkthrough controls below.
            </p>
          </div>

          {/* 2-Column Luxury Video Cabinet Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto perspective-1000">
            {[
              {
                id: 0,
                title: 'Luxury Culinary Kitchen',
                videoUrl: '/kitchen.mp4',
                fallbackImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
                area: '320 SQFT',
                lighting: 'Warm Under-Cabinet Ambient LEDs',
                theme: 'Premium Contemporary Kitchen',
              },
              {
                id: 1,
                title: 'Exclusive Master Wardrobe',
                videoUrl: '/wardrobe.mp4',
                fallbackImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
                area: '450 SQFT',
                lighting: 'Integrated Smart Profile LEDs',
                theme: 'Contemporary Neo-Classical',
              },
            ].map((showcase, index) => (
              <div 
                key={showcase.id} 
                className="group relative flex flex-col rounded-sm overflow-hidden glass-panel border-white/[0.03] transition-all duration-500 hover:scale-[1.03] hover:border-[#C9A84C]/40 hover:shadow-[0_15px_40px_rgba(201,168,76,0.1)] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              >
                {/* 16:9 3D Glass Pane Player Wrapper */}
                <div className="relative aspect-video w-full overflow-hidden bg-black/60">
                  
                  {/* HTML5 Video element */}
                  <video
                    ref={videoRefs[index]}
                    src={showcase.videoUrl}
                    poster={showcase.fallbackImage}
                    loop
                    muted
                    playsInline
                    onPlay={() => handleVideoStateSync(index, true)}
                    onPause={() => handleVideoStateSync(index, false)}
                    className="w-full h-full object-cover brightness-[0.75]"
                  />

                  {/* Technical Overlay HUD Grid */}
                  <div className="absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between">
                    <div className="flex items-center justify-between text-[7px] font-mono text-[#C9A84C]/90 tracking-[0.2em] bg-black/50 px-2 py-1 rounded backdrop-blur-sm self-start gap-1">
                      <span>WALKTHROUGH: ACTIVE [LOOP]</span>
                      <span className="w-1 h-1 rounded-full bg-emerald-500 animate-pulse ml-0.5" />
                    </div>
                    
                    <div className="flex items-end justify-between text-[9px] font-mono text-stone-400">
                      <span>DESIGNED BY SHREE</span>
                      <span>PREMIUM 4K WALKTHROUGH</span>
                    </div>
                  </div>

                  {/* Playback Interactor Button Layer */}
                  <div 
                    onClick={() => toggleVideoPlayback(index)}
                    className="absolute inset-0 z-25 cursor-pointer bg-black/20 hover:bg-black/40 flex items-center justify-center transition-colors duration-300"
                  >
                    <div className="w-14 h-14 rounded-full glass-panel flex items-center justify-center border-[#C9A84C]/40 group-hover:scale-110 group-hover:border-[#C9A84C] transition-all duration-300 shadow-2xl">
                      {isPlaying[index] ? (
                        /* Pause Icon SVG */
                        <svg className="w-5 h-5 text-[#C9A84C]" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        /* Play Icon SVG */
                        <svg className="w-5 h-5 text-[#C9A84C] translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Simulated player custom seek bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
                    <div 
                      className="h-full bg-gradient-to-r from-[#C9A84C] to-[#DFC373] transition-all duration-300"
                      style={{ width: isPlaying[index] ? '100%' : '15%', transitionDuration: isPlaying[index] ? '40s' : '0.3s' }}
                    />
                  </div>
                </div>

                {/* Technical specifications sub-grid */}
                <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-[#0D0D0D] to-[#0A0A0A]">
                  <div>
                    <h3 className="font-serif text-lg text-white font-medium mb-3 tracking-wide">{showcase.title}</h3>
                    <div className="grid grid-cols-2 gap-3 border-t border-white/[0.04] pt-3 text-[10px] font-mono text-stone-400">
                      <div>
                        <span className="text-stone-600 block uppercase text-[8px] tracking-wider">Footprint</span>
                        <span className="text-stone-300 font-semibold">{showcase.area}</span>
                      </div>
                      <div>
                        <span className="text-stone-600 block uppercase text-[8px] tracking-wider">Lux. Lighting</span>
                        <span className="text-stone-300 font-semibold">{showcase.lighting}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-stone-600 block uppercase text-[8px] tracking-wider">Esthetic Scheme</span>
                        <span className="text-[#C9A84C]">{showcase.theme}</span>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => toggleVideoPlayback(index)}
                    className="mt-6 border-t border-white/[0.05] pt-4 w-full text-left text-[9px] font-sans tracking-[0.2em] uppercase text-[#E5E5E5] hover:text-[#C9A84C] flex items-center justify-between group transition-colors"
                  >
                    {isPlaying[index] ? 'PAUSE SECTOR PLAYBACK' : 'ACTIVATE CINEMATIC LOOP'}
                    <span className="text-[#C9A84C] transform translate-x-0 group-hover:translate-x-1.5 transition-transform">➔</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. THE INTERACTIVE BLUEPRINT & MATERIALS TRAY */}
      <section id="blueprints" className="py-24 md:py-32 bg-[#0D0D0D] border-y border-white/[0.04]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="text-center max-w-[700px] mx-auto mb-16">
            <span className="text-[11px] font-sans tracking-[0.4em] text-[#C9A84C] block uppercase mb-3">TECHNICAL ARCHITECTURE</span>
            <h2 className="font-serif text-4xl md:text-5xl font-normal text-white mb-6">Structural Verification</h2>
            <p className="text-stone-400 text-sm font-sans leading-relaxed tracking-wide font-light">
              Toggle between high-end digital schemas, wireframes, and authentic materials selection. Experience the depth of our customization metrics.
            </p>
          </div>

          {/* Interactive Switchboard Tab Control */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[
              { key: 'textures', label: 'Material Palette Textures' },
              { key: 'blueprint', label: 'Interior Blueprint Layouts' },
              { key: 'wireframe', label: '3D Mesh Wireframe Renders' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-5 py-3 rounded-sm text-[10px] tracking-[0.3em] font-semibold uppercase font-sans transition-all duration-300 border ${
                  activeTab === tab.key 
                    ? 'border-[#C9A84C] bg-[#C9A84C]/10 text-[#C9A84C] shadow-[0_0_15px_rgba(201,168,76,0.1)]' 
                    : 'border-white/[0.05] hover:border-white/20 text-stone-300 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Render Active View State Container */}
          <div className="glass-panel rounded-sm overflow-hidden min-h-[480px] p-8 md:p-12 shadow-[0_15px_50px_rgba(0,0,0,0.5)] flex flex-col justify-between">
            
            {/* TAB CONTENT: MATERIAL TEXTURES SELECTION */}
            {activeTab === 'textures' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-4">
                  <h3 className="font-serif text-2xl text-white tracking-wide">Elite Material Sourcing</h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    Select a core composite to preview tactile feedback specifications. Every stone is hand-selected in Italy or custom-crafted inside our dedicated workshop.
                  </p>

                  <div className="space-y-2 pt-4">
                    {[
                      { id: 'marble', label: 'Italian Statuario Marble' },
                      { id: 'gold', label: 'Brushed Champagne Gold' },
                      { id: 'charcoal', label: 'Fluted Acoustic Charcoal' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        onClick={() => setSelectedTexture(m.id)}
                        className={`w-full text-left px-4 py-3 rounded-sm text-xs font-sans tracking-widest uppercase flex items-center justify-between group transition-all duration-300 border ${
                          selectedTexture === m.id
                            ? 'border-[#C9A84C] text-[#C9A84C] bg-white/[0.02]'
                            : 'border-white/[0.03] text-stone-300 hover:text-white hover:border-white/[0.1]'
                        }`}
                      >
                        {m.label}
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A84C]">➔</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fade-up">
                  {/* Card 1: Italian Statuario Marble Card */}
                  <div 
                    onClick={() => setSelectedTexture('marble')}
                    className={`group relative rounded-sm border p-6 min-h-[220px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                      selectedTexture === 'marble' 
                        ? 'border-[#C9A84C] bg-stone-900 shadow-[0_0_20px_rgba(201,168,76,0.15)]' 
                        : 'border-white/[0.04] bg-stone-950/40 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute inset-0 opacity-[0.06] bg-no-repeat bg-cover pointer-events-none" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=50')` }} />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-2 font-semibold">Tactile Layer 01</span>
                      <h4 className="font-serif text-lg text-white font-medium leading-snug">Italian Statuario Marble</h4>
                    </div>
                    <div className="relative z-10 border-t border-white/[0.06] pt-4 mt-4 text-[10px] font-mono text-stone-400">
                      <div>ORIGIN: Carrara, Italy</div>
                      <div>VEIN PATTERN: Deep Ash Veins</div>
                      <div className="text-[#C9A84C] mt-2 font-semibold">HIGH GLOW SATIN / POLISHED</div>
                    </div>
                  </div>

                  {/* Card 2: Brushed Champagne Gold Tiers */}
                  <div 
                    onClick={() => setSelectedTexture('gold')}
                    className={`group relative rounded-sm border p-6 min-h-[220px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                      selectedTexture === 'gold' 
                        ? 'border-[#C9A84C] bg-stone-900 shadow-[0_0_20px_rgba(201,168,76,0.15)]' 
                        : 'border-white/[0.04] bg-stone-950/40 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/10 via-yellow-600/[0.03] to-transparent pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1.5 font-semibold">Tactile Layer 02</span>
                      <h4 className="font-serif text-lg text-white font-medium leading-snug">Brushed Gold Tiers</h4>
                    </div>
                    <div className="relative z-10 border-t border-white/[0.06] pt-4 mt-4 text-[10px] font-mono text-[#FFF] relative">
                      <div className="text-stone-400">FINISH: PVD Satin Coating</div>
                      <div className="text-stone-400">METALLIC RATIO: 18K Tone</div>
                      <div className="text-[#C9A84C] mt-2 font-semibold">ANTISTATIC BRUSHED PROTECT</div>
                    </div>
                  </div>

                  {/* Card 3: Fluted Charcoal Acoustic Paneling */}
                  <div 
                    onClick={() => setSelectedTexture('charcoal')}
                    className={`group relative rounded-sm border p-6 min-h-[220px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                      selectedTexture === 'charcoal' 
                        ? 'border-[#C9A84C] bg-stone-900 shadow-[0_0_20px_rgba(201,168,76,0.15)]' 
                        : 'border-white/[0.04] bg-stone-950/40 hover:border-white/20'
                    }`}
                  >
                    <div className="absolute inset-x-0 inset-y-0 opacity-[0.2] bg-[linear-gradient(90deg,_#000_50%,_transparent_50%)] bg-[length:12px_100%] pointer-events-none" />
                    <div className="relative z-10">
                      <span className="text-[10px] font-mono text-[#C9A84C] uppercase tracking-widest block mb-1.5 font-semibold">Tactile Layer 03</span>
                      <h4 className="font-serif text-lg text-white font-medium leading-snug">Fluted Acoustic Charcoal</h4>
                    </div>
                    <div className="relative z-10 border-t border-white/[0.06] pt-4 mt-4 text-[10px] font-mono text-stone-400">
                      <div>FINISH: Matte Carbon Slate</div>
                      <div>SLAT WIDTH: 14mm Symmetrical</div>
                      <div className="text-[#C9A84C] mt-2 font-semibold font-mono">ABSORPTION COEFFICIENT: 0.85 NRC</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT: CONCEPT BLUEPRINT */}
            {activeTab === 'blueprint' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-4">
                  <span className="bg-stone-800/80 px-3 py-1 rounded text-[9px] font-mono tracking-widest text-[#C9A84C] uppercase">Vector Blueprint Plot</span>
                  <h3 className="font-serif text-2xl text-white tracking-wide">Elite Residence Blueprint</h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    Precision structural outlines capturing exact eave-line elevations, functional room margins, and electrical light node intersections. All dimensions correspond to Royal Living Lounge blueprints.
                  </p>
                  <div className="border-t border-white/[0.06] pt-4 mt-6 text-[11px] font-mono space-y-1 text-stone-400">
                    <div>SCALE: 1:50 METRIC METRIC SEC-A</div>
                    <div>APPROVED BY: Shree Structural Board</div>
                    <div>SECTOR: Sector 10, Navi Mumbai</div>
                  </div>
                </div>

                <div className="lg:col-span-8 glass-panel border-stone-800 rounded-xl p-4 bg-black/80 flex items-center justify-center relative">
                  {/* Realistic Vector CAD Blueprint Drawing */}
                  <svg viewBox="0 0 600 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-75">
                    {/* Grid Pattern */}
                    <defs>
                      <pattern id="grid" width="30" height="30" patternUnits="userSpaceOnUse">
                        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(201, 168, 76, 0.08)" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="600" height="320" fill="url(#grid)" />
                    
                    {/* Outline Walls */}
                    <rect x="50" y="40" width="500" height="240" stroke="rgba(255,255,255,0.4)" strokeWidth="2.5" strokeDasharray="4 2" />
                    <rect x="55" y="45" width="490" height="230" stroke="rgba(255,255,255,0.7)" strokeWidth="1" />
                    
                    {/* Subdivisions / Inner Walls */}
                    <line x1="280" y1="45" x2="280" y2="150" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    <line x1="280" y1="190" x2="280" y2="275" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
                    
                    {/* Door Arc Sweeps */}
                    <path d="M 280 150 A 40 40 0 0 1 320 190" stroke="#C9A84C" strokeWidth="1" strokeDasharray="3 3" fill="none" />
                    <line x1="280" y1="150" x2="320" y2="150" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
                    
                    {/* Fictional furniture outline / Cantilever Master Suite config */}
                    <rect x="80" y="80" width="130" height="150" stroke="rgba(197,160,89,0.5)" strokeWidth="1" strokeDasharray="2 1" fill="none" />
                    <circle cx="145" cy="155" r="4" fill="#C9A84C" />
                    <text x="145" y="140" fill="#C9A84C" fontSize="9" fontFamily="monospace" textAnchor="middle">CANTILEVER BED NODE</text>
                    
                    {/* Technical Measurements labels */}
                    <text x="60" y="270" fill="white" fontSize="8" fontFamily="monospace">A-1 FLOORPLATE</text>
                    <text x="540" y="270" fill="white" fontSize="8" fontFamily="monospace">650 SQFT SEC</text>
                    <text x="505" y="55" fill="rgba(255,255,255,0.4)" fontSize="7" fontFamily="monospace">SHREE SEC-10-K</text>
                    
                    {/* Custom dimension arrows */}
                    <line x1="55" y1="210" x2="275" y2="210" stroke="#C9A84C" strokeWidth="1" />
                    <polygon points="55,210 65,207 65,213" fill="#C9A84C" />
                    <polygon points="275,210 265,207 265,213" fill="#C9A84C" />
                    <text x="165" y="202" fill="#C9A84C" fontSize="9" fontFamily="monospace" textAnchor="middle">16&apos; - 6&quot;</text>
                  </svg>
                </div>
              </div>
            )}

            {/* TAB CONTENT: 3D WIREFRAME MESH */}
            {activeTab === 'wireframe' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-4 space-y-4">
                  <span className="bg-stone-800/80 px-3 py-1 rounded text-[9px] font-mono tracking-widest text-[#C9A84C] uppercase">GPU Perspective Canvas</span>
                  <h3 className="font-serif text-2xl text-white tracking-wide">3D Volumetric Mesh</h3>
                  <p className="text-stone-400 text-xs leading-relaxed font-light">
                    Real-time computational wireframe modeling. This matrix represents our architectural planning system for previewing structural spatial physics before laying high-gloss concrete.
                  </p>
                  <div className="pt-4 flex items-center gap-2 text-stone-500 font-mono text-[10px]">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-ping" />
                    <span>SYSTEM CORE STATUS: NOMINAL</span>
                  </div>
                </div>

                <div className="lg:col-span-8 flex items-center justify-center relative bg-black rounded-xl p-8 min-h-[300px] overflow-hidden border border-white/[0.03]">
                  <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#C9A84C] via-stone-900 to-black pointer-events-none" />
                  
                  {/* Isometric / wireframe mesh layout rendering using HTML inline vector */}
                  <svg viewBox="0 0 500 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[85%] h-auto max-h-[220px]">
                    <path d="M 250 20 L 450 110 L 250 200 L 50 110 Z" stroke="rgba(201, 168, 76, 0.4)" strokeWidth="1" />
                    <path d="M 250 50 L 410 110 L 250 170 L 90 110 Z" stroke="rgba(251, 251, 251, 0.15)" strokeWidth="1" />
                    <path d="M 250 80 L 370 110 L 250 140 L 130 110 Z" stroke="rgba(201, 168, 76, 0.2)" strokeWidth="1" />
                    
                    {/* Vertical structural projection poles */}
                    <line x1="250" y1="20" x2="250" y2="200" stroke="rgba(201,168,76,0.5)" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="50" y1="110" x2="450" y2="110" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="2 2" />
                    
                    {/* Isometric Architectural Structure Lines simulation */}
                    <path d="M 250 50 L 300 75 L 300 120" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M 250 50 L 200 75 L 200 120" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M 250 170 L 300 145 L 300 120" stroke="#C9A84C" strokeWidth="1.5" />
                    <path d="M 250 170 L 200 145 L 200 120" stroke="#C9A84C" strokeWidth="1.5" />
                    
                    <path d="M 170 120 L 250 155 L 330 120" stroke="#C9A84C" strokeWidth="1" />
                    
                    {/* Floating HUD particles */}
                    <circle cx="300" cy="75" r="3" fill="#C9A84C" />
                    <circle cx="200" cy="75" r="3" fill="#C9A84C" />
                    <rect x="245" y="140" width="10" height="10" stroke="white" strokeWidth="1" transform="rotate(45 250 145)" fill="none" />
                  </svg>
                </div>
              </div>
            )}

            {/* Custom Footer specs coordinate index */}
            <div className="border-t border-white/[0.04] pt-6 mt-8 flex flex-col md:flex-row items-center justify-between text-[10px] font-mono text-stone-500">
              <span>SYSTEM CAD MODULES READY FOR EXPORT v3.12</span>
              <span>LATEST DIAGNOSTIC AUDIT LOGGED CAPABILITY: OK</span>
            </div>
          </div>

        </div>
      </section>

      {/* 6. SECURED LEAD ACQUISITION FRAME & INTEGRATED WHATSAPP API */}
      <section id="consultation" className="relative py-24 md:py-32 bg-[#050505]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-[11px] font-sans tracking-[0.4em] text-[#C9A84C] block uppercase font-semibold">SECURED BRIEFING ENGINE</span>
              <h2 className="font-serif text-4xl md:text-6xl font-normal text-white tracking-tight leading-tight">
                Connect Directly with our Principal
              </h2>
              <p className="text-stone-400 text-sm font-sans leading-relaxed tracking-wide font-light">
                Fill our private briefing sequence. For immediate inquiries requiring structural verification or immediate layout estimations, please summon our WhatsApp direct-connection link.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-mono text-xs">01</div>
                  <div>
                    <h4 className="text-sm text-white font-medium">Coordinate Settle</h4>
                    <p className="text-xs text-stone-500 mt-1">We log your specific sector layout coordinates instantly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded bg-[#C9A84C]/10 border border-[#C9A84C]/30 flex items-center justify-center text-[#C9A84C] font-mono text-xs">02</div>
                  <div>
                    <h4 className="text-sm text-white font-medium">Bespoke Design Allocation</h4>
                    <p className="text-xs text-stone-500 mt-1">Our elite senior designer prepares an aligned visual draft sequence.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="glass-panel rounded-sm p-8 md:p-12 border-[#C9A84C]/25 bg-stone-900/45 shadow-[0_20px_50px_rgba(201,168,76,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#C9A84C]/10 to-transparent rounded-full blur-3xl pointer-events-none" />
                
                {formState !== 'success' ? (
                  <form onSubmit={handleInquirySubmit} className="space-y-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      
                      {/* Full Name field */}
                      <div>
                        <label className="block text-[10px] font-sans tracking-[0.25em] uppercase text-stone-300 mb-2 font-medium">Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Lord/Lady Name" 
                          className="w-full bg-stone-950/80 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C9A84C] transition-all"
                        />
                      </div>

                      {/* Active WhatsApp Contact */}
                      <div>
                        <label className="block text-[10px] font-sans tracking-[0.25em] uppercase text-stone-300 mb-2 font-medium">Active WhatsApp Contact *</label>
                        <div className="relative">
                          <span className="absolute left-3 top-3.5 text-xs text-stone-500 font-mono">🇮🇳 +91</span>
                          <input 
                            type="tel" 
                            required
                            pattern="[0-9]{10}"
                            value={formData.contactNo}
                            onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                            placeholder="Phone Number" 
                            className="w-full bg-stone-950/80 border border-white/[0.08] rounded-sm pl-16 pr-4 py-3 text-sm text-white placeholder-stone-600 focus:outline-none focus:border-[#C9A84C] transition-all"
                          />
                        </div>
                      </div>

                      {/* Site Location */}
                      <div>
                        <label className="block text-[10px] font-sans tracking-[0.25em] uppercase text-stone-300 mb-2 font-medium">Site Location</label>
                        <select 
                          value={formData.siteLocation}
                          onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                          className="w-full bg-stone-950/80 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A84C] transition-all"
                        >
                          <option value="Kharghar">Kharghar (Sector 10 / Luxury Hub)</option>
                          <option value="Panvel">Panvel</option>
                          <option value="Vashi">Vashi</option>
                          <option value="Seawoods">Seawoods</option>
                          <option value="Ulwe">Ulwe</option>
                          <option value="Other">Other Navi Mumbai Sector</option>
                        </select>
                      </div>

                      {/* Investment Budget Tier Selection */}
                      <div>
                        <label className="block text-[10px] font-sans tracking-[0.25em] uppercase text-stone-300 mb-2 font-semibold">Investment Budget Tier</label>
                        <select 
                          value={formData.budgetTier}
                          onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                          className="w-full bg-stone-950/80 border border-white/[0.08] rounded-sm px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C9A84C] transition-all"
                        >
                          <option value="₹15L - ₹25L">₹15 Lakhs - ₹25 Lakhs</option>
                          <option value="₹25L - ₹50L">₹25 Lakhs - ₹50 Lakhs</option>
                          <option value="₹50L - ₹1Cr">₹50 Lakhs - ₹1 Crore</option>
                          <option value="₹1Cr+ Custom Opulence">₹1 Crore+ Custom Opulence</option>
                        </select>
                      </div>

                    </div>

                    <div className="pt-4 flex flex-col gap-4">
                      {/* Submit button */}
                      <button 
                        type="submit"
                        disabled={formState === 'loading'}
                        className="pulse-gold w-full relative overflow-hidden group rounded-sm min-h-[50px] text-xs tracking-[0.3em] font-sans uppercase font-bold bg-[#C9A84C] text-black shadow-lg disabled:opacity-50 transition-all duration-300 transform active:scale-95"
                      >
                        {formState === 'loading' ? 'TRANSMITTING BRIEF...' : 'SUBMIT SECURED INQUIRY'}
                      </button>

                      {/* Standalone Secondary Quick-Action Block (WhatsApp API Direct Link) */}
                      <a 
                        href={`https://wa.me/918454958813?text=Hello%20Shree%20Interior,%20I%20would%20like%20to%20schedule%20a%20private%20walkthrough%20design%20consultation%20for%20my%20luxury%20space%20in%20Navi%20Mumbai.`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full text-center inline-block bg-emerald-950/40 hover:bg-emerald-905/60 border border-emerald-500/30 text-emerald-300 rounded-sm min-h-[50px] py-3.5 text-xs tracking-[0.25em] font-sans uppercase font-semibold transition-all duration-300"
                        id="whatsapp-direct-button"
                      >
                        💬 DIRECT WHATSAPP INSTANT HANDOFF (+91 84549 58813)
                      </a>
                    </div>
                  </form>
                ) : (
                  /* Success State Machine card */
                  <div className="text-center py-10 space-y-6 animate-fade-up relative z-10">
                    <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-3xl text-emerald-400 tracking-wide">Inquiry Logged successfully ✓</h3>
                      <p className="text-stone-300 text-sm max-w-[450px] mx-auto font-sans font-light">
                        Greetings, <span className="font-semibold text-white">{formData.fullName}</span>. Your architectural brief has been successfully locked into our private secure sector.
                      </p>
                    </div>
                    <div className="bg-stone-950/80 p-4 rounded-xl max-w-[380px] mx-auto border border-white/[0.04]">
                      <div className="text-stone-500 text-[10px] font-mono uppercase tracking-widest mb-1">RECORD SECURE REFERENCING</div>
                      <div className="text-stone-300 text-xs font-mono font-bold tracking-wider">SHREE-2026-X84-SEC10</div>
                      <div className="text-stone-500 text-[9px] font-sans mt-2">Principal Architect will reach out to you within 3 business hours.</div>
                    </div>
                    
                    <button 
                      onClick={() => setFormState('idle')}
                      className="text-[#C9A84C] hover:text-white transition-colors text-xs tracking-widest font-mono uppercase border-b border-dashed border-[#C9A84C] hover:border-white pb-0.5"
                    >
                      Transmit Another Design Brief
                    </button>
                  </div>
                )}
                
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 7. ARCHITECTURAL EDITORIAL FOOTER */}
      <footer className="bg-black text-[#F5F5F5] border-t border-white/[0.05] py-16 md:py-24">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start justify-between pb-16 border-b border-white/[0.05]">
            
            <div className="md:col-span-4 space-y-6">
              {/* Luxury Logo Same to Same inline SVG */}
              <LogoSVG className="h-16 w-auto text-[#C9A84C] -translate-x-2" />
              <p className="text-stone-500 text-xs leading-relaxed max-w-[325px] font-light">
                Elite architectural interior planning. Creating custom spaces in Sector 18 Kharghar, Navi Mumbai since 2018.
              </p>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A84C] uppercase block font-semibold">STUDIO COORDINATES</span>
              <p className="font-sans text-xs text-stone-400 leading-relaxed max-w-[300px] font-light">
                Shop No-4, Shreeji Height,<br/>
                Sector 18, Kharghar – 410210,<br/>
                Navi Mumbai, Maharashtra, India.
              </p>
            </div>

            <div className="md:col-span-4 space-y-4">
              <span className="text-[10px] font-sans tracking-[0.25em] text-[#C9A84C] uppercase block font-semibold">DIRECT TELEPHONIC ACCESS</span>
              <a 
                href="tel:+919870949549" 
                className="font-serif text-2xl font-semibold text-white tracking-wide block hover:text-[#C9A84C] transition-colors"
              >
                +91 98709 49549
              </a>
              <div className="pt-2 text-stone-500 text-xs">
                <span>Principal Email: salvibharti05@gmail.com</span>
              </div>
            </div>

          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-sans text-stone-500">
            <div>
              <span>© 2026 Shree Interior Designer. All Rights Reserved. Private Copyhold.</span>
            </div>
            <div className="flex gap-6 tracking-wider uppercase text-[10px]">
              <a href="#hero" className="hover:text-[#C9A84C] transition-colors">TOP OF ESTEEM</a>
              <a href="#consultation" className="hover:text-[#C9A84C] transition-colors">PRIVATE PRIVACY</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
