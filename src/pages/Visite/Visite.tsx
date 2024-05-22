import { extend } from "@react-three/fiber";
import {Html, OrbitControls} from "@react-three/drei";
import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";
import { animated, useSpring} from "react-spring";


extend({ OrbitControls });




function Dome() {
    const [currentPlanIndex, setCurrentPlanIndex] = React.useState(0); // Index du plan actuel

    const planImages = [
        require(`../../assets/plans/Plan_1.jpg`),
        require(`../../assets/plans/Plan_2.jpg`),
        require(`../../assets/plans/Plan_3.jpg`),
        require(`../../assets/plans/Plan_4.jpg`),
        require(`../../assets/plans/Plan_5.jpg`),
        require(`../../assets/plans/Plan_6.jpg`),
        require(`../../assets/plans/Plan_7.jpg`),
    ];

    const handleArrowClick = (index: number) => {
        setCurrentPlanIndex(index); // On change le plan actuel
    };

    const arrowConnections = [
        // Connexions entre les flèches
        // Plan 1
        [1],
        // Plan 2
        [0, 2],
        // Plan 3
        [1, 3],
        // Plan 4
        [2, 4],
        // Plan 5
        [3, 5],
        // Plan 6
        [4, 6],
        // Plan 7
        [5],
    ];

    const arrowData: { position: THREE.Vector3, direction: THREE.Vector3 }[][] = [
        // Flèches pour chaque plan
        // Plan 1
        [
            { position: new THREE.Vector3(20, -10, -1), direction: new THREE.Vector3(0, 1, 0) }, // perpective/auteur/Gauche Droite
        ],
        // Plan 2
        [
            { position: new THREE.Vector3(-20, -10, 1), direction: new THREE.Vector3(1, 0, 0) },
            { position: new THREE.Vector3(20, -10, -3), direction: new THREE.Vector3(-1, 0, 0) },
        ],
        // Plan 3
        [
            { position: new THREE.Vector3(20, -10, -1), direction: new THREE.Vector3(-1, 0, 0) },
            { position: new THREE.Vector3(-20, -10, 1), direction: new THREE.Vector3(1, 0, 0) },

        ],
        // Plan 4
        [
            { position: new THREE.Vector3(1, -15, 25), direction: new THREE.Vector3(1, 0, 0) },
            { position: new THREE.Vector3(20, -10, -3), direction: new THREE.Vector3(-1, 0, 0) },

        ],
        // Plan 5
        [
            { position: new THREE.Vector3(-20, -10, 1), direction: new THREE.Vector3(0, 0, 1) },
            { position: new THREE.Vector3(5, -10, 15), direction: new THREE.Vector3(0, 0, -1) },
        ],
        // Plan 6
        [
            { position: new THREE.Vector3(-2, -10, 5), direction: new THREE.Vector3(1, 0, 0) },
            { position: new THREE.Vector3(0, -10, -10), direction: new THREE.Vector3(-1, 0, 0) },
        ],
        // Plan 7
        [
            { position: new THREE.Vector3(5, -10, 15), direction: new THREE.Vector3(0, 0, 1) },
        ],
    ];

    const textureLoader = new THREE.TextureLoader(); // Chargeur de texture
    const texture = textureLoader.load(planImages[currentPlanIndex]); // Texture du plan actuel
    texture.wrapS = THREE.RepeatWrapping; // répétition de la texture
    texture.repeat.x = -1; // répétition de la texture

    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
    });

    const informationPoints = [ // Points d'information
        //plan 1
    [
        { position: new THREE.Vector3(10, 5, 10), text: "camera" },
    ],
    //plan 2
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 2" },
    ],
    //plan 3
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 3" },
    ],
    //plan 4
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 4" },
    ],
    //plan 5
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 5" },
    ],
    //plan 6
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 6" },
    ],
    //plan 7
    [
        { position: new THREE.Vector3(0, 0, 0), text: "Point d'information 7" },
    ],
    ];

    return (
        <mesh>
            <sphereGeometry args={[500, 60, 40]} />
            <meshBasicMaterial attach="material" map={texture} side={THREE.DoubleSide} />

            {/* Affichage des points d'information pour le plan actuel */}
            {informationPoints[currentPlanIndex].map((point, pointIndex) => (
                <mesh key={pointIndex} position={point.position}>
                    <sphereGeometry args={[0.5, 32, 32]} />
                    <meshBasicMaterial attach="material" color="red" />
                    <Html>
                        <div className="information-point">
                            {point.text}
                        </div>
                    </Html>
                </mesh>
            ))}

            {/* Affichage des flèches de navigation */}
            {arrowConnections[currentPlanIndex].map((connectedIndex, arrowIndex) => {
                const { position, direction } = arrowData[currentPlanIndex][arrowIndex];

                return (
                    <mesh
                        key={arrowIndex}
                        position={position}
                        onClick={() => handleArrowClick(connectedIndex)}
                    >
                        <coneGeometry attach="geometry" args={[1, 4, 6]} />
                        <meshBasicMaterial attach="material" color="white" />
                        <mesh rotation={new THREE.Euler(direction.x, direction.y, direction.z)}>
                            <coneGeometry attach="geometry" args={[0.2, 1, 6]} />
                            <meshBasicMaterial attach="material" color="white" />
                        </mesh>
                    </mesh>
                );
            })}
        </mesh>
    );
}


const Visite = () => {
    return (
        <Canvas style={{ width: "100%", height: "100vh" }}>
            <OrbitControls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} rotateSpeed={-0.5} />
            <Suspense fallback={null}>
                <Dome />
            </Suspense>
        </Canvas>
    );
};

export default Visite;
