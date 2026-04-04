import React, { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";
import profilePic from "../assets/safeerheadshot.png";

function RetroComputer({ scrollProgress = 0, displayedRole, windowWidth }) {
  const groupRef = useRef();
  const isTablet = windowWidth >= 480 && windowWidth < 768;
  const isPhone = windowWidth < 480;

  useFrame(() => {
    if (!groupRef.current) return;

    const p = scrollProgress;
    const rotationProgress = Math.min(p / 0.55, 0.74);

    const isPhone = windowWidth < 480;
    const isTablet = windowWidth >= 480 && windowWidth < 768;

    const maxZ = isPhone ? -52 : isTablet ? -35 : -20;
    const endY = isPhone ? 1.2 : isTablet ? 0.8 : 0.4;

    // Start X at 0 to keep the monitor centered. Final X shift matches the aggressiveness of the zoom constraint.
    const startX = 0;
    const endX = isPhone ? -0.8 : isTablet ? -0.5 : 0;

    groupRef.current.position.z = THREE.MathUtils.lerp(
      0,
      maxZ,
      rotationProgress,
    );
    groupRef.current.position.y = THREE.MathUtils.lerp(
      -0.55,
      endY,
      rotationProgress,
    );
    groupRef.current.position.x = THREE.MathUtils.lerp(
      startX,
      endX,
      rotationProgress,
    );
    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      0,
      0.2,
      rotationProgress,
    );
    groupRef.current.rotation.y = THREE.MathUtils.lerp(0, 1, rotationProgress);
    groupRef.current.rotation.z = THREE.MathUtils.lerp(
      0,
      0.05,
      rotationProgress,
    );
  });

  return (
    <group ref={groupRef}>
      {/* --- DESK MAT --- */}
      <mesh position={[0.4, -2.25, 0.5]} rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[9.5, 0.05, 3.5]} />
        <meshStandardMaterial color="#1a122e" roughness={0.9} metalness={0.1} />
      </mesh>
      {/* Desk Mat Edge Glow */}
      <mesh position={[0.4, -2.28, 0.5]} rotation={[-0.05, 0, 0]}>
        <boxGeometry args={[9.6, 0.02, 3.6]} />
        <meshBasicMaterial color="#00ffff" transparent opacity={0.6} />
      </mesh>

      {/* --- MONITOR --- */}
      {/* Back / Body (Sleek gray-purple acrylic) */}
      <mesh position={[0, 0.5, -0.1]}>
        <boxGeometry args={[4.6, 3.2, 0.4]} />
        <meshStandardMaterial color="#2a2a35" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* Screen Bezel (Matte dark) */}
      <mesh position={[0, 0.5, 0.12]}>
        <boxGeometry args={[3.8, 2.6, 0.08]} />
        <meshStandardMaterial color="#111116" metalness={0.1} roughness={0.8} />
      </mesh>

      {/* Black screen backing */}
      <mesh position={[0, 0.55, 0.16]}>
        <planeGeometry args={[3.55, 2.35]} />
        <meshStandardMaterial color="#000000" />
      </mesh>

      {/* Screen HTML overlay */}
      <Html transform position={[0, 0.55, 0.17]} distanceFactor={1.5}>
        <div
          className={`bg-black text-white px-8 ${
            isPhone
              ? "w-[560px] h-[340px] flex flex-col justify-center items-center"
              : "w-[560px] h-[340px] grid grid-cols-[1.5fr_1fr] items-center"
          }`}
          style={{ boxShadow: "inset 0 0 20px rgba(0,255,255,0.15)" }}
        >
          {isPhone ? (
            <>
              <div className="flex justify-center items-center mb-4">
                <div
                  className="relative h-32 w-28 scale-x-350 -translate-y-2 md:translate-y-0 md:scale-x-100 profile-blob border-[2px] border-cyan-100 flex items-center justify-center bg-linear-to-br from-cyan-700 to-blue-600/40"
                  style={{
                    boxShadow: `
                        0 0 10px rgba(0,255,255,0.55),
                        0 0 20px rgba(0,255,255,0.45),
                        inset 0 0 15px rgba(0,255,255,0.45)
                         `,
                  }}
                >
                  <img
                    src={profilePic}
                    alt="Safeer"
                    className="absolute inset-x-0 bottom-0 h-[95%] w-full object-cover object-bottom"
                    style={{
                      borderRadius: "inherit",
                      maskImage:
                        "linear-gradient(to top, black 80%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
              <div className="scale-x-275 -translate-y-2">
                <div className="text-center">
                  <p className="mb-4 text-[1rem] tracking-[0.35em] bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    HI THERE,
                  </p>
                  <h1 className="text-[1.8rem] leading-none mb-5 font-black">
                    I'M SAFEER
                  </h1>
                  <div className="text-sm text-gray-300 w-full">
                    <span className="text-white">
                      I'm a{" "}
                      <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                        {displayedRole}
                      </span>
                    </span>
                    <span className="ml-1 inline-block h-[1.1em] w-[2px] bg-cyan-400 animate-pulse align-middle" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="pr-2">
                <p className="mb-2 text-sm tracking-[0.35em] bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  HI THERE,
                </p>
                <h1 className="text-[2.75rem] leading-none mb-4 font-black">
                  I'M SAFEER
                </h1>
                <div className="text-lg text-gray-300 whitespace-nowrap">
                  <span className="text-white">
                    I'm a{" "}
                    <span className="bg-linear-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                      {displayedRole}
                    </span>
                  </span>
                  <span className="ml-1 inline-block h-[1.1em] w-[2px] bg-cyan-400 animate-pulse align-middle" />
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div
                  className="relative h-52 w-44 profile-blob border-[3px] border-cyan-100 flex items-center justify-center bg-linear-to-br from-cyan-700 to-blue-600/40"
                  style={{
                    boxShadow: `
                        0 0 18px rgba(0,255,255,0.55),
                        0 0 35px rgba(0,255,255,0.45),
                        0 0 65px rgba(0,255,255,0.35),
                        0 0 95px rgba(0,255,255,0.20),
                        inset 0 0 25px rgba(0,255,255,0.45)
                         `,
                  }}
                >
                  <img
                    src={profilePic}
                    alt="Safeer"
                    className="absolute inset-x-0 bottom-0 h-[95%] w-full object-cover object-bottom"
                    style={{
                      borderRadius: "inherit",
                      maskImage:
                        "linear-gradient(to top, black 80%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </Html>

      {/* Monitor Stand Base */}
      <mesh position={[0, -1.8, -0.2]}>
        <planeGeometry args={[1.6, 1.2]} rotation={[-Math.PI / 2, 0, 0]} />
        <meshStandardMaterial color="#1a1a24" metalness={0.3} roughness={0.7} />
      </mesh>

      {/* Monitor Stand Neck */}
      <mesh position={[0, -0.6, -0.15]}>
        <cylinderGeometry args={[0.2, 0.3, 2.2, 8]} />
        <meshStandardMaterial color="#1a1a24" metalness={0.4} roughness={0.5} />
      </mesh>

      {/* --- KEYBOARD --- */}
      <group position={[-0.8, -2.15, 0.7]} rotation={[-0.05, 0, 0]}>
        {/* Base */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.8, 0.15, 1.4]} />
          <meshStandardMaterial
            color="#1a1a24"
            roughness={0.8}
            metalness={0.2}
          />
        </mesh>

        {/* Ambient Underglow */}
        <mesh position={[0, -0.06, 0]}>
          <boxGeometry args={[3.9, 0.02, 1.5]} />
          <meshBasicMaterial color="#ff00ff" transparent opacity={0.5} />
        </mesh>

        {/* RGB Keybed Backlight (Cyan glow under keys) */}
        <mesh position={[0, 0.08, 0]}>
          <boxGeometry args={[3.55, 0.02, 1.2]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>

        {/* Keycaps Block (Dark matte keys hiding the center of the bed) */}
        <mesh position={[0, 0.1, 0]}>
          <boxGeometry args={[3.45, 0.04, 1.1]} />
          <meshStandardMaterial color="#0a0a0f" roughness={0.9} />
        </mesh>

        {/* Lit WASD Keys Accent */}
        <mesh position={[-1.2, 0.11, 0.1]}>
          <boxGeometry args={[0.4, 0.04, 0.3]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>

        {/* Lit Arrow Keys Accent */}
        <mesh position={[0.8, 0.11, 0.35]}>
          <boxGeometry args={[0.4, 0.04, 0.2]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      </group>

      {/* --- MOUSE --- */}
      <group position={[2.2, -2.15, 0.8]} rotation={[-0.05, 0.2, 0]}>
        {/* Mouse body */}
        <mesh position={[0, 0, 0]} castShadow>
          <boxGeometry args={[0.5, 0.15, 0.9]} />
          <meshStandardMaterial
            color="#101018"
            roughness={0.7}
            metalness={0.4}
          />
        </mesh>

        {/* Mouse Underglow */}
        <mesh position={[0, -0.06, 0]}>
          <boxGeometry args={[0.55, 0.02, 0.95]} />
          <meshBasicMaterial color="#00ffff" transparent opacity={0.5} />
        </mesh>

        {/* RGB Scroll Wheel */}
        <mesh position={[0, 0.05, -0.2]}>
          <boxGeometry args={[0.06, 0.12, 0.25]} />
          <meshBasicMaterial color="#ff00ff" />
        </mesh>

        {/* RGB Palm Logo / Back Accent */}
        <mesh position={[0, 0.08, 0.25]}>
          <boxGeometry args={[0.2, 0.02, 0.2]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      </group>

      {/* --- CPU TOWER --- */}
      <group position={[3.6, -0.5, -0.4]}>
        {/* Chassis */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.8, 3.6, 3.2]} />
          <meshStandardMaterial
            color="#1a1a24"
            metalness={0.4}
            roughness={0.6}
          />
        </mesh>

        {/* Glass Side Panel */}
        <mesh position={[-0.91, 0, 0]}>
          <planeGeometry args={[3.0, 3.4]} rotation={[0, -Math.PI / 2, 0]} />
          <meshPhysicalMaterial
            color="#2a0044"
            transmission={0.8}
            opacity={1}
            transparent
            metalness={0.1}
            roughness={0.2}
            clearcoat={1}
          />
        </mesh>

        {/* Internal Core Light */}
        <mesh position={[-0.5, 0, 0]}>
          <boxGeometry args={[0.5, 2.8, 2.5]} />
          <meshBasicMaterial color="#8a2be2" transparent opacity={0.25} />
        </mesh>

        {/* Fan 1 (Top) */}
        <mesh position={[-0.5, 1.0, 1.4]} rotation={[0, -Math.PI / 2, 0]}>
          <torusGeometry args={[0.35, 0.05, 16, 32]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
        {/* Fan 2 (Bottom) */}
        <mesh position={[-0.5, -0.5, 1.4]} rotation={[0, -Math.PI / 2, 0]}>
          <torusGeometry args={[0.35, 0.05, 16, 32]} />
          <meshBasicMaterial color="#8a2be2" />
        </mesh>

        {/* GPU Block */}
        <mesh position={[0, -0.2, -0.5]}>
          <boxGeometry args={[1.2, 0.4, 2.0]} />
          <meshStandardMaterial color="#1c1c28" metalness={0.5} />
        </mesh>
        {/* GPU RGB Line */}
        <mesh position={[-0.6, -0.2, -0.5]}>
          <boxGeometry args={[0.05, 0.02, 2.0]} />
          <meshBasicMaterial color="#00ffff" />
        </mesh>
      </group>
    </group>
  );
}

export default function ThreeHeroSection() {
  const sectionRef = useRef(null);
  const [displayedRole, setDisplayedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [opacity, setOpacity] = useState(1);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024,
  );

  const roles = useMemo(
    () => ["Full Stack Developer", "Mobile App Developer", "AI Agent Builder"],
    [],
  );

  useEffect(() => {
    const handleScroll = () => {
      const max = window.innerHeight * 1.5;
      const value = Math.min(window.scrollY / max, 1);
      setProgress(value);

      const isMobile = window.innerWidth < 768;
      const fadeStart = isMobile ? 0.4 : 0.5;
      const fadeEnd = isMobile ? 0.7 : 0.8;
      const fadeValue =
        value <= fadeStart
          ? 1
          : Math.max(0, 1 - (value - fadeStart) / (fadeEnd - fadeStart));
      setOpacity(fadeValue);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getCameraPosition = () => {
    if (windowWidth < 480) return [0, -0.1, 11.0];
    if (windowWidth < 768) return [0, 0.2, 7];
    if (windowWidth < 1024) return [0, 0.1, 4.5];
    return [0, 0, 3.1];
  };

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = currentRole.slice(0, displayedRole.length + 1);
        setDisplayedRole(next);
        if (next === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        const next = currentRole.slice(0, displayedRole.length - 1);
        setDisplayedRole(next);
        if (next === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedRole, isDeleting, roleIndex, roles]);

  return (
    <section ref={sectionRef} id="home" className="relative h-screen">
      <div
        className="fixed top-0 left-0 h-screen w-full z-0"
        style={{ opacity, pointerEvents: opacity < 0.1 ? "none" : "auto" }}
      >
        <Canvas>
          <PerspectiveCamera
            makeDefault
            position={getCameraPosition()}
            fov={28}
          />
          <ambientLight intensity={1.4} />
          <directionalLight position={[3, 5, 5]} intensity={2} />
          <pointLight position={[-4, 3, 4]} intensity={1.5} color="#00ffff" />
          <pointLight position={[4, 3, 4]} intensity={1.5} color="#8a2be2" />

          <group
            scale={
              windowWidth < 480
                ? [0.9, 2.7, 1]
                : windowWidth < 768
                  ? [1, 1.6, 1]
                  : [1, 1, 1]
            }
          >
            <RetroComputer
              scrollProgress={progress}
              displayedRole={displayedRole}
              windowWidth={windowWidth}
            />
          </group>
        </Canvas>
      </div>
    </section>
  );
}
