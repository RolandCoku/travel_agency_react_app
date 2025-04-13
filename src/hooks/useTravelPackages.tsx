import { useState, useEffect } from 'react';
import { TravelPackage } from '../types/travel';
import { travelService } from '../services/travelService';

export function useTravelPackages(initialPage: number = 1, limit: number = 16) {
    const [packages, setPackages] = useState<TravelPackage[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(initialPage);
    const [totalPages, setTotalPages] = useState<number>(0);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await travelService.getTravelPackages(currentPage, limit);
                setPackages(response.data);
                setTotalPages(response.totalPages);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
            } finally {
                setLoading(false);
            }
        };

        fetchPackages();
    }, [currentPage, limit]);

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    return {
        packages,
        loading,
        error,
        currentPage,
        totalPages,
        nextPage,
        prevPage,
        setCurrentPage
    };
} 