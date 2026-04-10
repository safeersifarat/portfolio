/* eslint-disable react/no-unknown-property */
import React from 'react';

export default function DigitalBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-[#030614]">
      {/* Background soft glowing orbs */}
      <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-700/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[10%] right-[20%] w-[600px] h-[600px] bg-cyan-700/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-[50%] right-[40%] w-[400px] h-[400px] bg-purple-700/15 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none opacity-40 mix-blend-screen mask-radial-fade"></div>

      {/* Circuit lines */}
      <svg className="absolute inset-0 w-full h-full opacity-70 pointer-events-none" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow-line">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Faint static traces backgrounds */}
        <g stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none">
           {/* Left side traces */}
           <path d="M 0 150 L 300 150 L 300 450 L 150 450 L 150 750 L 0 750" />
           <path d="M 0 350 L 100 350 L 100 650 L 400 650 L 400 950 L 250 950 L 250 1080" />
           <path d="M 200 0 L 200 250 L 500 250 L 500 550 L 350 550" />

           {/* Center traces */}
           <path d="M 400 100 L 700 100 L 700 300 L 1100 300 L 1100 150 L 1400 150" />
           <path d="M 600 1080 L 600 850 L 900 850 L 900 600 L 1200 600 L 1200 900 L 1500 900" />
           <path d="M 800 0 L 800 200 L 1000 200 L 1000 500 L 1300 500 L 1300 700" />

           {/* Right side traces */}
           <path d="M 1920 250 L 1600 250 L 1600 450 L 1800 450 L 1800 750 L 1550 750 L 1550 1080" />
           <path d="M 1920 550 L 1700 550 L 1700 150 L 1450 150 L 1450 400 L 1650 400 L 1650 650 L 1850 650 L 1850 950 L 1920 950" />
           <path d="M 1750 0 L 1750 350 L 1500 350 L 1500 600" />
        </g>

        {/* Animated traces moving along the paths */}
        <g filter="url(#glow-line)" fill="none" strokeWidth="2">
           {/* Left */}
           <path pathLength="100" className="svg-animate-circuit [animation-duration:6s] delay-0" stroke="rgba(255,255,255,0.3)" d="M 0 150 L 300 150 L 300 450 L 150 450 L 150 750 L 0 750" />
           <path pathLength="100" className="svg-animate-circuit-reverse [animation-duration:8s] delay-1" stroke="rgba(255,255,255,0.3)" d="M 0 350 L 100 350 L 100 650 L 400 650 L 400 950 L 250 950 L 250 1080" />
           <path pathLength="100" className="svg-animate-circuit [animation-duration:5s] delay-2" stroke="rgba(255,255,255,0.3)" d="M 200 0 L 200 250 L 500 250 L 500 550 L 350 550" />

           {/* Center */}
           <path pathLength="100" className="svg-animate-circuit-reverse [animation-duration:7s] delay-3" stroke="rgba(255,255,255,0.3)" d="M 400 100 L 700 100 L 700 300 L 1100 300 L 1100 150 L 1400 150" />
           <path pathLength="100" className="svg-animate-circuit [animation-duration:9s] delay-0" stroke="rgba(255,255,255,0.3)" d="M 600 1080 L 600 850 L 900 850 L 900 600 L 1200 600 L 1200 900 L 1500 900" />
           <path pathLength="100" className="svg-animate-circuit-reverse [animation-duration:6s] delay-1" stroke="rgba(255,255,255,0.3)" d="M 800 0 L 800 200 L 1000 200 L 1000 500 L 1300 500 L 1300 700" />

           {/* Right */}
           <path pathLength="100" className="svg-animate-circuit [animation-duration:8s] delay-2" stroke="rgba(255,255,255,0.3)" d="M 1920 250 L 1600 250 L 1600 450 L 1800 450 L 1800 750 L 1550 750 L 1550 1080" />
           <path pathLength="100" className="svg-animate-circuit-reverse [animation-duration:10s] delay-3" stroke="rgba(255,255,255,0.3)" d="M 1920 550 L 1700 550 L 1700 150 L 1450 150 L 1450 400 L 1650 400 L 1650 650 L 1850 650 L 1850 950 L 1920 950" />
           <path pathLength="100" className="svg-animate-circuit [animation-duration:5s] delay-0" stroke="rgba(255,255,255,0.3)" d="M 1750 0 L 1750 350 L 1500 350 L 1500 600" />
        </g>

        {/* Nodes / Intersection Dots */}
        <g fill="rgba(255,255,255,0.3)" filter="url(#glow-line)">
           <circle className="animate-pulse" cx="300" cy="150" r="3" />
           <circle className="animate-pulse" cx="150" cy="450" r="3" />
           <circle className="animate-pulse" cx="100" cy="650" r="3" />
           <circle className="animate-pulse" cx="400" cy="950" r="3" />
           <circle className="animate-pulse" cx="200" cy="250" r="3" />
           <circle className="animate-pulse" cx="500" cy="550" r="3" />

           <circle className="animate-pulse" cx="700" cy="300" r="3" />
           <circle className="animate-pulse" cx="1100" cy="150" r="3" />
           <circle className="animate-pulse" cx="900" cy="850" r="3" />
           <circle className="animate-pulse" cx="1200" cy="600" r="3" />
           <circle className="animate-pulse" cx="1000" cy="200" r="3" />
           <circle className="animate-pulse" cx="1300" cy="500" r="3" />

           <circle className="animate-pulse" cx="1600" cy="450" r="3" />
           <circle className="animate-pulse" cx="1800" cy="750" r="3" />
           <circle className="animate-pulse" cx="1700" cy="150" r="3" />
           <circle className="animate-pulse" cx="1450" cy="400" r="3" />
           <circle className="animate-pulse" cx="1850" cy="650" r="3" />
           <circle className="animate-pulse" cx="1500" cy="350" r="3" />
        </g>
      </svg>
    </div>
  );
}
