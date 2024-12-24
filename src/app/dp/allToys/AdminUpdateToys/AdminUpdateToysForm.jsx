'use client' ;
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const AdminUpdateToysForm = () => {


    const { id } = useParams();
    const [toyDetails, setToyDetails] = useState({});
  
    useEffect(() => {
      axios
        .get(`http://localhost:7000/all-toys/${id}`)
        .then((res) => setToyDetails(res.data))
        .catch((error) => {
          console.log(error);
        });
    }, [id]);

    return (
        <div>
            <h1>AdminUpdateToys{toyDetails.length}</h1>
        </div>
    );
};

export default AdminUpdateToysForm;