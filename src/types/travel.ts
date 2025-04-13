export interface TravelPackageImage {
    image_url: string;
    alt_text: string;
}

export interface TravelPackage {
    id: number;
    name: string;
    description: string;
    location: string;
    price: string;
    start_date: string;
    end_date: string;
    free_seats: number;
    main_image: TravelPackageImage;
    secondary_images: TravelPackageImage[];
}

export interface TravelPackagesResponse {
    currentPage: string;
    totalPages: number;
    data: TravelPackage[];
} 