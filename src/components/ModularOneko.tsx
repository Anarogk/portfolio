"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef, useCallback } from 'react';

const ModularOneko: React.FC = () => {
    const nekoRef = useRef<HTMLDivElement>(null);

    const spriteSets = {
        idle: [[-3, -3]],
        alert: [[-7, -3]],
        scratchSelf: [
            [-5, 0],
            [-6, 0],
            [-7, 0],
        ],
        scratchWallN: [
            [0, 0],
            [0, -1],
        ],
        scratchWallS: [
            [-7, -1],
            [-6, -2],
        ],
        scratchWallE: [
            [-2, -2],
            [-2, -3],
        ],
        scratchWallW: [
            [-4, 0],
            [-4, -1],
        ],
        tired: [[-3, -2]],
        sleeping: [
            [-2, 0],
            [-2, -1],
        ],
        N: [
            [-1, -2],
            [-1, -3],
        ],
        NE: [
            [0, -2],
            [0, -3],
        ],
        E: [
            [-3, 0],
            [-3, -1],
        ],
        SE: [
            [-5, -1],
            [-5, -2],
        ],
        S: [
            [-6, -3],
            [-7, -2],
        ],
        SW: [
            [-5, -3],
            [-6, -1],
        ],
        W: [
            [-4, -2],
            [-4, -3],
        ],
        NW: [
            [-1, 0],
            [-1, -1],
        ],
    };

    const setSprite = useCallback((name: keyof typeof spriteSets, frame: number) => {
        if (!nekoRef.current) return;
        const sprite = spriteSets[name][frame % spriteSets[name].length];
        nekoRef.current.style.backgroundPosition = `${sprite[0] * 32}px ${sprite[1] * 32}px`;
    }, []);

    useEffect(() => {
        if (typeof window === 'undefined') return;

        const isReducedMotion =
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches;

        if (isReducedMotion) return;

        let nekoPosX = 32;
        let nekoPosY = 32;
        let mousePosX = 0;
        let mousePosY = 0;
        let frameCount = 0;
        let idleTime = 0;
        let idleAnimation: keyof typeof spriteSets | null = null;
        let idleAnimationFrame = 0;
        const nekoSpeed = 10;

        function resetIdleAnimation() {
            idleAnimation = null;
            idleAnimationFrame = 0;
        }

        function idle() {
            idleTime += 1;
            if (
                idleTime > 10 &&
                Math.floor(Math.random() * 200) == 0 &&
                idleAnimation == null
            ) {
                let availableIdleAnimations: (keyof typeof spriteSets)[] = ["sleeping", "scratchSelf"];
                if (nekoPosX < 32) {
                    availableIdleAnimations.push("scratchWallW");
                }
                if (nekoPosY < 32) {
                    availableIdleAnimations.push("scratchWallN");
                }
                if (nekoPosX > window.innerWidth - 32) {
                    availableIdleAnimations.push("scratchWallE");
                }
                if (nekoPosY > window.innerHeight - 32) {
                    availableIdleAnimations.push("scratchWallS");
                }
                idleAnimation = availableIdleAnimations[
                    Math.floor(Math.random() * availableIdleAnimations.length)
                ];
            }

            switch (idleAnimation) {
                case "sleeping":
                    if (idleAnimationFrame < 8) {
                        setSprite("tired", 0);
                        break;
                    }
                    setSprite("sleeping", Math.floor(idleAnimationFrame / 4));
                    if (idleAnimationFrame > 192) {
                        resetIdleAnimation();
                    }
                    break;
                case "scratchWallN":
                case "scratchWallS":
                case "scratchWallE":
                case "scratchWallW":
                case "scratchSelf":
                    setSprite(idleAnimation, idleAnimationFrame);
                    if (idleAnimationFrame > 9) {
                        resetIdleAnimation();
                    }
                    break;
                default:
                    setSprite("idle", 0);
                    return;
            }
            idleAnimationFrame += 1;
        }

        function frame() {
            frameCount += 1;
            const diffX = nekoPosX - mousePosX;
            const diffY = nekoPosY - mousePosY;
            const distance = Math.sqrt(diffX ** 2 + diffY ** 2);

            if (distance < nekoSpeed || distance < 48) {
                idle();
                return;
            }

            idleAnimation = null;
            idleAnimationFrame = 0;

            if (idleTime > 1) {
                setSprite("alert", 0);
                idleTime = Math.min(idleTime, 7);
                idleTime -= 1;
                return;
            }

            let direction = "";
            direction += diffY / distance > 0.5 ? "N" : "";
            direction += diffY / distance < -0.5 ? "S" : "";
            direction += diffX / distance > 0.5 ? "W" : "";
            direction += diffX / distance < -0.5 ? "E" : "";
            setSprite(direction as keyof typeof spriteSets, frameCount);

            nekoPosX -= (diffX / distance) * nekoSpeed;
            nekoPosY -= (diffY / distance) * nekoSpeed;

            nekoPosX = Math.min(Math.max(16, nekoPosX), window.innerWidth - 16);
            nekoPosY = Math.min(Math.max(16, nekoPosY), window.innerHeight - 16);

            updatePos();
        }

        function updatePos() {
            if (!nekoRef.current) return;
            nekoRef.current.style.left = `${nekoPosX - 16}px`;
            nekoRef.current.style.top = `${nekoPosY - 16}px`;
        }

        let lastFrameTimestamp: number | null = null;

        function onAnimationFrame(timestamp: number) {
            if (!nekoRef.current) return;
            if (!lastFrameTimestamp) {
                lastFrameTimestamp = timestamp;
            }
            if (timestamp - lastFrameTimestamp > 100) {
                lastFrameTimestamp = timestamp;
                frame();
            }
            window.requestAnimationFrame(onAnimationFrame);
        }

        const wheelHandler = (event: WheelEvent) => {
            nekoPosY += event.deltaY / 10;
            updatePos();
        };

        const mouseMoveHandler = (event: MouseEvent) => {
            mousePosX = event.clientX;
            mousePosY = event.clientY;
        };

        document.addEventListener('wheel', wheelHandler);
        document.addEventListener('mousemove', mouseMoveHandler);

        window.requestAnimationFrame(onAnimationFrame);

        return () => {
            document.removeEventListener('wheel', wheelHandler);
            document.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, [setSprite]);

    useEffect(() => {
        if (nekoRef.current) {
            nekoRef.current.style.backgroundImage = `url(/oneko.gif)`;
        }
    }, []);

    return (
        <div
            ref={nekoRef}
            id="oneko"
            aria-hidden="true"
            style={{
                width: '32px',
                height: '32px',
                position: 'fixed',
                pointerEvents: 'none',
                imageRendering: 'pixelated',
                left: '16px',
                top: '16px',
                zIndex: 9999,
                backgroundImage: `url(/oneko.gif)`,
                backgroundRepeat: 'no-repeat',
            }}
        />
    );
};

export default dynamic(() => Promise.resolve(ModularOneko), { ssr: false });
