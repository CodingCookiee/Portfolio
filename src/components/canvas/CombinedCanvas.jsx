import React, { Suspense } from 'react';
import { Canvas, extend } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import CanvasLoader from '../Loader';
import { ErrorBoundary } from '../../hoc';

extend(THREE);

const Earth = () => {
  const earth = useGLTF('./planet/scene-earth-optimized.glb', true);
  return <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />;
};

const Computers = () => {
  const { scene } = useGLTF('./desktop_pc/scene-reoptimized.glb', true);
  return (
    <primitive 
      object={scene}
      scale={0.75}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
    />
  );
};

const CombinedCanvas = ({ showEarth, showComputers }) => {
  return (
    <ErrorBoundary>
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true, antialias: false, powerPreference: 'high-performance' }}
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 3, 6] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        {showEarth && <Earth />}
        {showComputers && <Computers />}
        <OrbitControls autoRotate enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Preload all />
      </Suspense>
    </Canvas>
    </ErrorBoundary>
  );
};


export default CombinedCanvas;


