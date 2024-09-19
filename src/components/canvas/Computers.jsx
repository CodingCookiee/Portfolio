import { Suspense, useState, useEffect } from 'react'; 
import { Canvas } from '@react-three/fiber'; // Import Canvas component for 3D rendering
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'; // Import additional components for 3D scene management
import CanvasLoader from '../Loader'; // Import a loading component

// Component to render the computer model
const Computers = ({ isMobile }) => {
  // Load the 3D model of the computer
  const computer = useGLTF('./desktop_pc/scene.gltf');
  
  return (
    <mesh>
      {/* Ambient light to illuminate the scene */}
      <hemisphereLight intensity={2.5} groundColor="black" />
      {/* Point light for additional illumination */}
      <pointLight intensity={1} />
      {/* Spotlight for focused lighting */}
      <spotLight
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} // Softness of the spotlight edges
        intensity={1} 
        castShadow 
        shadow-mapSize={1024} // Size of the shadow map
      />
      {/* Render the loaded computer model with specific properties */}
      <primitive 
        object={computer.scene} // The 3D object to render
        scale={isMobile ? 0.7 : 0.75} // Scale based on mobile or desktop
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} // Position based on mobile or desktop
        rotation={[-0.01, -0.2, -0.1]} // Rotation of the model
      />
    </mesh>
  );
};

// Main canvas component
const ComputersCanvas = () => {
  const [isMobile, setisMobile] = useState(false); // State to track if the device is mobile

  useEffect(() => {
    // Media query to check if the screen width is less than or equal to 500px
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setisMobile(mediaQuery.matches); // Set initial state based on media query

    // Function to handle changes in the media query
    const handleMediaQueryChange = (event) => {
      setisMobile(event.matches); // Update state based on media query change
    };

    // Add event listener for media query changes
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Cleanup function to remove the event listener
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []); // Empty dependency array to run effect only once on mount

  return (
    <Canvas
      frameloop="demand" // Control the rendering loop
      shadows 
      camera={{ position: [20, 3, 5], fov: 25 }} 
      gl={{ preserveDrawingBuffer: true }} // Preserve drawing buffer for better rendering
    >
      <Suspense fallback={<CanvasLoader />}> {/* Show loader while the model is loading */}
        <OrbitControls
          enableZoom={false} // Disable zooming
          maxPolarAngle={Math.PI / 2} // Limit vertical rotation
          minPolarAngle={Math.PI / 2} // Limit vertical rotation
        />
        <Computers 
          isMobile={isMobile} // Pass mobile state to Computers component
        />
      </Suspense>
      <Preload all /> {/* Preload all assets */}
    </Canvas>
  );
};

export default ComputersCanvas; // Export the main canvas component
