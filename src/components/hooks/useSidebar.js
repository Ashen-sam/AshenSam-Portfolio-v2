import { useEffect, useState } from 'react';
import resume from '../../../public/Ashen-Samarasekera-Resume.pdf';

export const useSidebar = () => {
    const [isExpanded, setIsExpanded] = useState(true);
    const [isDownloading, setIsDownloading] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsExpanded(window.innerWidth >= 640);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleSidebar = () => setIsExpanded(prev => !prev);

    const handleDownload = () => {
        setIsDownloading(true);
        const link = document.createElement('a');
        link.href = resume;
        link.download = 'Ashen-Samarasekera-Resume.pdf';
        link.click();
        setTimeout(() => setIsDownloading(false), 600);
    };



    const sidebarVariants = {
        hidden: { x: -100, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 60,
                damping: 12,
                duration: 0.8,
            },
        },
    };

    return {
        isExpanded,
        isDownloading,
        toggleSidebar,
        handleDownload,

        sidebarVariants,
    };
};
