import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Rental from './Rental';
  
const Rentals = () => {
    const [rentals, setRentals] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/getRentals')
            .then(response => {
                setRentals(response.data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className="py-3 sm:py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {rentals.map((rental) => (
                    <Rental 
                        key={rental._id}  
                        title={rental.title} 
                        image={rental.image} 
                        price={rental.price}
                        rating={rental.rating}
                        decription={rental.decription}
                        availability={rental.availability}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rentals;


