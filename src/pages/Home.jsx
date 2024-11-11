import {useState,Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Island from '../models/islands'
import Space from '../models/Space'
import HomeInfo from '../components/HomeInfo'

const Home = () => {
  const [isRotating,setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenSize = () => {
    let screenScale = null
    let screenPosition = [0, -6.5, -43.4];
    let rotation = [0.1,4.7,0]

    if (window.innerWidth < 768) {
      screenScale = [0.9,0.9,0.9];
      
    } else {
      screenScale = [1,1,1];
    }

    return [screenScale, screenPosition,rotation];
  };
  const [islandScale,islandPosition,islandRotation] = adjustIslandForScreenSize();
  return (
    <section className='w-full h-screen relative'>
    <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
      {currentStage && <HomeInfo currentStage={currentStage} />}
    </div>
      <Canvas 
      className={`w-full h-screen transparent ${isRotating ?"cursor-grabbing":"cursor-grab"}`}
      camera={{near:0.1,far:1000}}
      >
        <Suspense fallback={<Loader/>}>
          <directionalLight position={[1,1,1]} intensity={3}/>
          <ambientLight intensity={2}/>
          <hemisphereLight skyColor="#b113d4" groundColor='000000' intensity={2}/>
          <Space IsRotating={isRotating}/>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home