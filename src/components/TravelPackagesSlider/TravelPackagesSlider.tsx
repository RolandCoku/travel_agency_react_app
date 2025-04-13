import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import {useTravelPackages} from '../../hooks/useTravelPackages.tsx';
import TravelPackagesCard from './TravelPackageCard/TravelPackageCard.tsx';
import './TravelPackagesSlider.css';


export default function TravelPackagesSlider() {
    const {packages, loading, error} = useTravelPackages();

    if (loading) {
        return <div className="loading">Loading packages...</div>;
    }

    if (error) {
        return <div className="error">Error: {error}</div>;
    }

    return (
        <section className="section-packages">
            <div className="section-tittle">
                <h2>Travel Packages</h2>
                <p>Explore our exclusive travel packages</p>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={true}
                className="swiper-packages"
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                breakpoints={{
                    640: {slidesPerView: 3},
                    1024: {slidesPerView: 4}
                }}
            >
                {packages.map((pkg) => (
                    <SwiperSlide key={pkg.id}>
                        <TravelPackagesCard travelPackage={pkg}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
} 