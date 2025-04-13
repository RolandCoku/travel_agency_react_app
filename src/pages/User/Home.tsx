import Navbar from '../../components/Navbar/Header.tsx'
import MainSlider from '../../components/MainSlider/MainSlider.tsx';
import TravelPackagesSlider from '../../components/TravelPackagesSlider/TravelPackagesSlider.tsx';

export default function Home(){
    return (
        <>
            <Navbar />
            <MainSlider/>
            <TravelPackagesSlider/>
        </>
    )
}