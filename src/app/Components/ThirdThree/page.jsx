"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import Image from "next/image";
import { useRef } from "react";
import { TextureLoader } from "three";
// import { MeshStandardMaterial } from "three";
// import { BoxGeometry } from "three";
import { OrbitControls, Stars } from "@react-three/drei";

export default function Home() {
  return (
    <>
      <div className="  flex justify-center">

        <div className=" flex items-center">
          <div className="   ">
            <Canvas>
              <ambientLight intensity={2.2} />
              <directionalLight position={[11.2, 11.3, 12.4]} />
              <OrbitControls />
              <Cube />
              {/* <Sphere/> */}
            </Canvas>
          </div> <div className="line"></div>

               <div className="vl "></div>
               <div className="line "></div>

          <div className="   ">
            <Canvas>
              <ambientLight intensity={0.5} />
              <directionalLight position={[7.2, 1.3, 5.4]} />
              <OrbitControls />
              <Sphere />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
}

function Sphere() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.7;
    mesh.current.rotation.y += delta * 0.7;
    mesh.current.rotation.z += delta * 0.7;
  });
  return (
    <>
      {/* <Stars
          radius={300}
          depth={60}
          count={20000}
          factor={7}
          saturation={0}
          fade={true}
        /> */}
      <mesh ref={mesh}>
        <sphereGeometry args={[1, 32, 1]} />
        <meshStandardMaterial color={"#f3f13e"} />{" "}
      </mesh>
    </>
  );
}

function Cube() {
  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.x += delta * 0.7;
    mesh.current.rotation.y += delta * 0.7;
    mesh.current.rotation.z += delta * 0.7;
  });

  //   const t1 = useLoader(TextureLoader, "/Assets/Glasses.jpeg");
  //   const t2 = useLoader(TextureLoader, "/Assets/Trouser.jpeg");
  //   const t3 = useLoader(TextureLoader, "/Assets/Watch.jpeg");
  //   const t4 = useLoader(TextureLoader, "/Assets/Suit.jpeg");
  //   const t5 = useLoader(TextureLoader, "/Assets/T-shirt.avif");
  //   const t6 = useLoader(TextureLoader, "/Assets/Dress.jpeg");
  return (
    <>
      {/* <Stars
        radius={300}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade={true}
      /> */}
      <mesh ref={mesh}>
        <capsuleGeometry args={[1, 1, 17, 8]} />
        <meshStandardMaterial color={"darkblue"} />{" "}
      </mesh>
    </>
  );
}
