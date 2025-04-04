import { useEffect, useState, lazy, Suspense } from 'react';

// Lazy load the background image
const backgroundImage = import('../assets/images/login-background.jpg').then(module => module.default);

export default function BackgroundImage() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        const loadImage = async () => {
            try {
                const src = await backgroundImage;
                if (mounted) {
                    const img = new Image();
                    img.src = src;
                    img.onload = () => {
                        if (mounted) {
                            setImageSrc(src);
                            setIsLoaded(true);
                        }
                    };
                }
            } catch (error) {
                console.error('Error loading background image:', error);
            }
        };

        loadImage();

        return () => {
            mounted = false;
        };
    }, []);

    if (!imageSrc) {
        return null;
    }

    return (
        <div 
            className={`background-image ${isLoaded ? 'loaded' : ''}`}
            style={{ backgroundImage: `url(${imageSrc})` }}
        />
    );
} 