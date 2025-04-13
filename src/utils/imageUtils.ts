export const getImageUrl = (imagePath: string): string => {
    // For development
    if (process.env.NODE_ENV === 'development') {
        return `/src/assets/images/uploaded/${imagePath}`;
    }
    
    // For production - adjust this path based on your build output structure
    return `/img/${imagePath}`;
}; 