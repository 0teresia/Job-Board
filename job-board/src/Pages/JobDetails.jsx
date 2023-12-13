import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const { id } = useParams();

  
    return (
        <div>
            <h2>JobDetails: {id}</h2>
        </div>
    );
};

export default JobDetails;
