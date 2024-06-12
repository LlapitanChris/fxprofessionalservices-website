'use client';
import { useEffect, useRef } from "react";
import Image from "next/image";

export function SplashScreen() {
    const ref = useRef();
    useEffect(() => {
        setTimeout(() => {
            function fadeOutEffect(dom) {
                var fadeTarget = dom;
                var fadeEffect = setInterval(function () {
                    if (!fadeTarget.style.opacity) {
                        fadeTarget.style.opacity = 1;
                    }
                    if (fadeTarget.style.opacity > 0) {
                        fadeTarget.style.opacity -= 0.1;
                    } else {
                        fadeTarget.style.display = 'none';
                        clearInterval(fadeEffect);
                    }
                }, 150);
            }
            
            fadeOutEffect(ref?.current);
            // ref?.current?.classList.add('hidden');
        }, 0);
    }, []);
    return (
        <>
            <main
                ref={ref}
                className='bg-[#115e59] fixed top-0 left-0 w-[100vw] h-[100vh] z-50 ease-out duration-150 flex items-center justify-center'>
                <div>
                    <Image src={'/logo.png'} width={'150'} height={'150'} />
                </div>
            </main>
        </>
    );
}