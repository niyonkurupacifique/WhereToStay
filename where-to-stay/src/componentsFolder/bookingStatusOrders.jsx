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


function createData(date, email, firstname, lastname) {
  return { date, email, firstname, lastname};
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

export default function BookingStatusOrders() {
  const { newToken2 } = useParams();
  const { itemId } = useParams();
  const [currentDate] = useState(new Date());
  const [MyProperty, setMyProperty] = useState([]);

  const getMyRequestedProperty = async () => {
    const result = await fetch(`https://wheretostay.onrender.com/api/studentsBooked/${itemId}`, {
      method: 'GET',
      headers: {
        "Authorization":newToken2,
      },
    });
    const result2 = await result.json();
    if (Array.isArray(result2)) {
      setMyProperty(result2);
    } else {
      setMyProperty([]); 
    }
    console.log("my requested booking property:", result2);
  };


  useEffect(() => {
    getMyRequestedProperty();
  }, []);

  const handleCancelRequest = (index) => {
    
  };

  return (
    <div className='space-y-8'>
      <Title>Students</Title>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell style={{color:'#1976D2'}}>Date</TableCell>
            <TableCell style={{color:'#1976D2'}}>Email</TableCell>
            <TableCell style={{color:'#1976D2'}}>First Name</TableCell>
            <TableCell style={{color:'#1976D2'}}>Last Name</TableCell>
            <TableCell style={{color:'#1976D2'}}>Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          { MyProperty.length===0? (<TableCell style={{paddingLeft:'50%',fontStyle: 'italic'}}>NO Booking found</TableCell>): MyProperty.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{currentDate.toDateString()}</TableCell>
              <TableCell>{item.student.email}</TableCell>
              <TableCell>{item.student.firstName}</TableCell>
              <TableCell>{item.student.lastName}</TableCell>
              <TableCell className=' space-y-2'>
                <div>
                <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Accept</button>
                </div>
                <div>
                <button type="button" class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Cancel</button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
       
    </div>
     
  );
}
