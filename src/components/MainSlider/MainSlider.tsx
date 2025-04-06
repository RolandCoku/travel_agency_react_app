import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

//Import images
import lakeView1 from '../../assets/images/home/lake-view-1.webp';
import lakeView2 from '../../assets/images/home/lake-view-2.webp';
import mountainLandscape1 from '../../assets/images/home/mountain-landscape-1.webp';
import mountainLandscape2 from '../../assets/images/home/mountain-landscape-2.webp';


export default function MainSlider() {
    const slides = [
        {
            image: lakeView1,
            caption: 'Explore the world with us'
        },
        {
            image: lakeView2,
            caption: 'Your adventure begins here'
        },
        {
            image: mountainLandscape1,
            caption: 'Discover new destinations'
        },
        {
            image: mountainLandscape2,
            caption: 'Experience the extraordinary'
        }
    ];

    return (
        <section className="hero-section">
            <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                loop={true}
                className="myHeroSwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div 
                            className="swiper-slide"
                            style={{
                                backgroundImage: `url(${slide.image})`,
                                backgroundPosition: 'bottom center'
                            }}
                        >
                            <div className="caption">{slide.caption}</div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}