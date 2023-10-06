import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button'; 
import Title from './Title';
import { useParams } from 'react-router-dom';
import ALLhouses from './Allhouses';


function createData(date, propertyType, propertyLocation, numberOfRooms, numberOfBathrooms, propertyOwner, ownerPhoneNumber, amount, status) {
  return { date, propertyType, propertyLocation, numberOfRooms, numberOfBathrooms, propertyOwner, ownerPhoneNumber, amount, status };
}

const rows = [
  createData(
    '16 Mar, 2019',
    'ghetto',
    'Tupelo, MS',
    'VISA ⠀•••• 3719',
    312.44,
  ),
];

export default function StudentsStatusOrders() {
  const { Newtoken } = useParams();
  const [currentDate] = useState(new Date());
  const [MyProperty, setMyProperty] = useState([]);

  const getMyRequestedProperty = async () => {
    const result = await fetch("https://wheretostay.onrender.com/api/my-bookings", {
      method: 'GET',
      headers: {
        "Authorization": Newtoken,
      },
    });
    const result2 = await result.json();
    if (Array.isArray(result2)) {
      setMyProperty(result2);
    } else {
      setMyProperty([]); 
    }
    console.log("my requested property:", result2);
  };


  useEffect(() => {
    getMyRequestedProperty();
  }, []);

  const handleCancelRequest = (index) => {
    
  };

  return (
    <div className='space-y-8'>
      <Title>Your Bookings Status</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#1976D2'}}>Date</TableCell>
            <TableCell style={{color:'#1976D2'}}>Property Type</TableCell>
            <TableCell style={{color:'#1976D2'}}>Property Location</TableCell>
            <TableCell style={{color:'#1976D2'}}>Number of Rooms</TableCell>
            <TableCell style={{color:'#1976D2'}}>Number of Bathrooms</TableCell>
            <TableCell style={{color:'#1976D2'}}>Property Owner</TableCell>
            <TableCell style={{color:'#1976D2'}}>Owner Phone Number</TableCell>
            <TableCell style={{color:'#1976D2'}}>Amount</TableCell>
            <TableCell style={{color:'#1976D2'}}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { MyProperty.length===0? (<TableCell style={{paddingLeft:'50%',fontStyle: 'italic'}}>NO Booking found</TableCell>): MyProperty.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{currentDate.toDateString()}</TableCell>
              <TableCell>{item.property_type}</TableCell>
              <TableCell>{item.city}</TableCell>
              <TableCell>{item.number_rooms}</TableCell>
              <TableCell>{item.number_of_bathrooms}</TableCell>
              <TableCell>{item.User.firstName + " " + item.User.lastName}</TableCell>
              <TableCell>{item.User.phoneNumber}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell>
                <div>Request sent</div>
                <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">cancel</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       
    </div>
     
  );
}
