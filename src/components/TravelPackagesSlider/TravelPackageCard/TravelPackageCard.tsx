import {TravelPackage} from "../../../types/travel.ts";
import {getImageUrl} from "../../../utils/imageUtils.ts";

export default function TravelPackageCard({travelPackage}: { travelPackage: TravelPackage }) {
    const imageUrl = getImageUrl(travelPackage.main_image.image_url);

    return (
        <div className="package-card">
            <img
                src={imageUrl}
                alt={travelPackage.main_image.alt_text}
                loading="lazy"
            />
            <div className="package-content">
                <h3>{travelPackage.name}</h3>
                <p>{travelPackage.description}</p>
                <p><strong>Location:</strong> {travelPackage.location}</p>
                <p><strong>Price:</strong> ${travelPackage.price}</p>
                <p><strong>Available Seats:</strong> {travelPackage.free_seats}</p>
                <button className="show-more-button">
                    Show More
                </button>
            </div>
        </div>
    );
}