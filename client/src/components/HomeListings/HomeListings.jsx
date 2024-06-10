import {useEffect, useState} from "react";
import axios from "axios";
import ListingItem from "../ListingItem/ListingItem.jsx";
import {Link} from "react-router-dom";

export const HomeListings = () => {
    const [offerListings, setOfferListings] = useState([]);
    const [saleListings, setSaleListings] = useState([]);
    const [rentListings, setRentListings] = useState([]);

    useEffect(() => {
        const fetchListings = async () => {
            try {
                const [offerRes, rentRes, saleRes] = await Promise.all([
                    axios.get('http://localhost:3000/api/listing/get?offer=true&limit=4'),
                    axios.get('http://localhost:3000/api/listing/get?type=rent&limit=4'),
                    axios.get('http://localhost:3000/api/listing/get?type=sale&limit=4')
                ]);

                setOfferListings(offerRes.data);
                setRentListings(rentRes.data);
                setSaleListings(saleRes.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchListings();
    }, []);

    return (
        <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
            {offerListings && offerListings.length > 0 && (
                <div className=''>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold text-slate-600'>Recent offers</h2>
                        <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>Show more
                            offers</Link>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {offerListings.map((listing) => (
                            <ListingItem listing={listing} key={listing._id}/>
                        ))}
                    </div>
                </div>
            )}
            {rentListings && rentListings.length > 0 && (
                <div className=''>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for rent</h2>
                        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>Show more
                            places for rent</Link>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {rentListings.map((listing) => (
                            <ListingItem listing={listing} key={listing._id}/>
                        ))}
                    </div>
                </div>
            )}
            {saleListings && saleListings.length > 0 && (
                <div className=''>
                    <div className='my-3'>
                        <h2 className='text-2xl font-semibold text-slate-600'>Recent places for sale</h2>
                        <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>Show more
                            places for sale</Link>
                    </div>
                    <div className='flex flex-wrap gap-4'>
                        {saleListings.map((listing) => (
                            <ListingItem listing={listing} key={listing._id}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}