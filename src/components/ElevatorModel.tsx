import React, { Suspense, useMemo, useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, ContactShadows, OrbitControls, useAnimations } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, ChevronRight, ChevronLeft } from 'lucide-react';

const ELEVATOR_COMPONENTS = [
  { id: 1, name: 'Detailed Interior', target: [0, 0, 0], camera: [0, 0, 0.5] },
  { id: 2, name: 'Outside', target: [0, 0, 0], camera: [0, 1.5, 6] }
];

function Model({ url, onSelect, activeComponent }: { url: string; onSelect: (name: string) => void, activeComponent: any }) {
  const { scene, animations } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  const { actions } = useAnimations(animations, groupRef);
  
  useMemo(() => {
    scene.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        if (node.material) {
          node.material.needsUpdate = true;
          if (node.material.map) node.material.map.anisotropy = 16;
        }
      }
    });
  }, [scene]);

  // Play animation if available
  useEffect(() => {
    if (animations.length > 0) {
      const action = actions[Object.keys(actions)[0]];
      if (action) {
        action.play();
      }
    }
  }, [actions, animations]);

  useFrame((state) => {
    if (activeComponent) {
      const step = 0.05;
      const targetPos = new THREE.Vector3(...activeComponent.camera);
      state.camera.position.lerp(targetPos, step);
      
      // Look at the target but allow OrbitControls to maintain its own target
      // This helps with interactivity in interior view
      const targetVec = new THREE.Vector3(...activeComponent.target);
      state.camera.lookAt(targetVec);
    }
  });

  return (
    <primitive 
      ref={groupRef}
      object={scene} 
      onClick={(e: any) => {
        e.stopPropagation();
        const name = e.object.name || "Component";
        onSelect(name);
      }}
    />
  );
}

useGLTF.preload('/elevator_with_animation_lowpoly.glb');

export function ElevatorModel() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [selectedPart, setSelectedPart] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const handleSelect = (name: string) => {
    setSelectedPart(name);
    setShowTooltip(false);
    setTimeout(() => setSelectedPart(null), 3000);
  };

  const nextComponent = () => {
    setActiveIndex((prev) => (prev + 1) % ELEVATOR_COMPONENTS.length);
    setShowTooltip(false);
  };

  const prevComponent = () => {
    setActiveIndex((prev) => (prev - 1 + ELEVATOR_COMPONENTS.length) % ELEVATOR_COMPONENTS.length);
    setShowTooltip(false);
  };

  return (
    <div 
      className="w-full h-full cursor-grab active:cursor-grabbing touch-none relative group" 
      style={{ touchAction: 'none' }}
      onPointerDown={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && (activeIndex === -1) && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 flex items-center gap-3 shadow-xl border border-white/10 whitespace-nowrap">
              <MousePointer2 size={14} className="animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-widest">Interactive 3D Elevator • Click Parts • Use Controls to Navigate</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Component Navigation UI - ONLY for Elevator */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4 bg-primary px-4 py-2 shadow-2xl border border-white/10 rounded-sm">
        <button 
          onClick={(e) => { e.stopPropagation(); prevComponent(); }}
          className="p-2 hover:bg-white/10 text-white transition-colors rounded-full"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="px-4 py-1 text-center min-w-[180px]">
          <span className="text-[10px] font-black text-white/60 uppercase tracking-widest block">Component</span>
          <span className="text-sm font-black text-white uppercase tracking-tight">
            {activeIndex === -1 ? "Full View" : `${ELEVATOR_COMPONENTS[activeIndex].id}. ${ELEVATOR_COMPONENTS[activeIndex].name}`}
          </span>
        </div>
        <button 
          onClick={(e) => { e.stopPropagation(); nextComponent(); }}
          className="p-2 hover:bg-white/10 text-white transition-colors rounded-full"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <AnimatePresence>
        {selectedPart && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: '-50%' }}
            animate={{ opacity: 1, scale: 1, x: '-50%' }}
            exit={{ opacity: 0, scale: 0.9, x: '-50%' }}
            className="absolute top-12 left-1/2 z-30 pointer-events-none"
          >
            <div className="bg-accent/90 backdrop-blur-sm text-white px-6 py-3 shadow-2xl border border-white/20 text-center">
              <span className="text-xs font-black uppercase tracking-widest">Selected: {selectedPart.replace(/_/g, ' ')}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas 
        dpr={[1, 2]} 
        shadows={{ type: THREE.PCFShadowMap }}
        camera={{ position: [0, 0, 8], fov: 35 }} 
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} castShadow={false} adjustCamera={activeIndex === -1}>
            <PresentationControls
              global
              snap={false}
              enabled={true}
              rotation={[0, -Math.PI / 4, 0] as [number, number, number]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <Model 
                url="/elevator_with_animation_lowpoly.glb" 
                onSelect={handleSelect} 
                activeComponent={activeIndex === -1 ? null : ELEVATOR_COMPONENTS[activeIndex]} 
              />
            </PresentationControls>
          </Stage>
          <OrbitControls 
            enableZoom={true} 
            enablePan={activeIndex !== -1} 
            enableRotate={true} 
            makeDefault 
            minDistance={activeIndex === -1 ? 3 : 0.01}
            maxDistance={activeIndex === -1 ? 15 : 5}
            target={activeIndex !== -1 ? new THREE.Vector3(...ELEVATOR_COMPONENTS[activeIndex].target) : new THREE.Vector3(0, 0, 0)}
          />
          <ContactShadows position={[0, -1.5, 0] as [number, number, number]} opacity={0.4} scale={20} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
