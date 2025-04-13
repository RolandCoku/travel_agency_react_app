import { TravelPackagesResponse } from '../types/travel';

const API_BASE_URL = 'http://localhost/test_api';

export const travelService = {
    async getTravelPackages(page: number = 1, limit: number = 16): Promise<TravelPackagesResponse> {
        const response = await fetch(
            `${API_BASE_URL}/travel-packages.php?page=${page}&limit=${limit}`
        );
        
        if (!response.ok) {
            throw new Error('Failed to fetch travel packages');
        }
                
        return response.json();
    }
}; 