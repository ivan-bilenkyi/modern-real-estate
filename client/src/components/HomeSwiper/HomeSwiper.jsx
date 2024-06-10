import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import axios from "axios";
export const HomeSwiper = () => {
    const [offerListings, setOfferListings] = useState([]);
    SwiperCore.use([Navigation]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const response = await axios.get('/api/listing/get?offer=true&limit=4');
                setOfferListings(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchListings();
    }, []);

    return (
        <Swiper navigation>
            {offerListings.map((listing) => (
                <SwiperSlide key={listing._id}>
                    <div
                        style={{
                            background: listing.imageUrls[0] ? `url(${listing.imageUrls[0]}) center no-repeat` : '',
                            backgroundSize: 'cover',
                        }}
                        className='h-[500px]'
                    >
                        {!listing.imageUrls[0] && <div>No image available</div>}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};
