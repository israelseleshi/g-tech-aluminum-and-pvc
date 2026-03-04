import React, { Suspense, useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, Stage, PresentationControls, ContactShadows, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { MousePointer2, Touchpad } from 'lucide-react';

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  
  // Apply branding colors/textures if possible by traversing the scene
  useMemo(() => {
    scene.traverse((node) => {
      if (node instanceof THREE.Mesh) {
        // Fix transparency/damage appearance by ensuring materials are opaque and correctly rendered
        if (node.material) {
          node.material.transparent = false;
          node.material.opacity = 1;
          node.material.side = THREE.FrontSide;
          node.material.depthWrite = true;
          node.material.depthTest = true;
          node.material.needsUpdate = true;
          if (node.material.map) node.material.map.anisotropy = 16;
        }

        // Branding: Target specific components by name or type
        if (node.name.toLowerCase().includes('logo') || node.name.toLowerCase().includes('brand')) {
          node.material = new THREE.MeshStandardMaterial({
            color: '#dc2626', // G-Tech Accent Red
            metalness: 0.7,
            roughness: 0.2
          });
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} />;
}

useGLTF.preload('/generator.glb');

export function GeneratorModel() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      className="w-full h-full cursor-grab active:cursor-grabbing touch-none relative group" 
      style={{ touchAction: 'none' }}
      onPointerDown={() => setShowTooltip(false)}
    >
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <div className="bg-primary/90 backdrop-blur-sm text-white px-4 py-2 flex items-center gap-3 shadow-xl border border-white/10 whitespace-nowrap">
              <MousePointer2 size={14} className="animate-bounce" />
              <span className="text-[10px] font-black uppercase tracking-widest">Interactive 3D Model • Drag to Rotate • Scroll to Zoom</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Canvas 
        dpr={[1, 2]} 
        shadows={{ type: THREE.PCFShadowMap }} 
        camera={{ position: [0, 0, 5], fov: 35 }} 
        gl={{ antialias: true, preserveDrawingBuffer: true }}
      >
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6} castShadow={false} adjustCamera={1.2}>
            <PresentationControls
              global
              snap={false}
              rotation={[0, 0.3, 0] as [number, number, number]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
            >
              <Model url="/generator.glb" />
            </PresentationControls>
          </Stage>
          <OrbitControls 
            enableZoom={true} 
            enablePan={false} 
            enableRotate={false} 
            makeDefault 
            minDistance={2}
            maxDistance={10}
          />
          <ContactShadows position={[0, -1.2, 0] as [number, number, number]} opacity={0.4} scale={15} blur={2.5} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
