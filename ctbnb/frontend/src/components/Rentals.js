// import React from 'react';  
// import Rental from './Rental';
// import house1 from '../assets/house1.png';
// import house2 from '../assets/house2.png';
// import house3 from '../assets/house3.png';
// import house4 from '../assets/house4.png';
// import house5 from '../assets/house5.png';
// import house6 from '../assets/house6.png';
// import house7 from '../assets/house7.png';
// import house8 from '../assets/house8.png';
// import house9 from '../assets/house9.png';
// import house10 from '../assets/house10.png';

// const Rentals = () => {
//     const rentals = [
//         {title:"Coventry, CT", image: house1, price: "1541"},
//         {title:"Waterford, CT", image: house2, price: "1541"},
//         {title:"Ellington, CT", image: house3, price: "1541"},
//         {title:"Salem, CT", image: house4, price: "1541"},
//         {title:"Herbron, CT", image: house5, price: "1541"},
//         {title:"Manchester, CT", image: house6, price: "1541"},
//         {title:"Bridgeport, CT", image: house7, price: "1541"},
//         {title:"Darien, CT", image: house8, price: "1541"},
//         {title:"New Heaven, CT", image: house9, price: "1541"},
//         {title:"Mystic, CT", image: house10, price: "1541"},
//     ]
//   return (
//     <div className="py-3 sm:py-5">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//             {rentals.map((rental) => (
//             <Rental 
//             title={rental.title} 
//             image={rental.image} 
//             price={rental.price}
//             />
//             ))}
//         </div>
//     </div>
//   )
// }

// export default Rentals

import React, { useEffect, useState } from 'react';
import Rental from './Rental';
import axios from 'axios';

const Rentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/rentals')
      .then(response => {
        setRentals(response.data);
      })
      .catch(error => console.error('Error fetching data: ', error));
  }, []);

  return (
    <div className="py-3 sm:py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {rentals.map((rental) => (
            <Rental
                key={rental._id}
                title={rental.title}
                image={require(`../assets/${rental.image}`)}
                price={rental.price}
            />
            ))}
        </div>
    </div>
  );
}

export default Rentals;
