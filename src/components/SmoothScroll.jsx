import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const SmoothScroll = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            smooth: true,
            smoothTouch: false,
            easing: (x) => 1 - Math.pow(1 - x, 3), // nice easing
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return null;
};

export default SmoothScroll;
