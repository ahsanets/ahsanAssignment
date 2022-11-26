import React from 'react';  
import CertBadge from '../components/CertBadge'; 
import CertHeading from '../components/CertHeading';
import PresentedName from '../components/PresentedName';

const Certificate = () => {

  const Presented_Data = {
    Name : "Ahsan",
    LastName : "Nawaz",
    Comments : "Appreciation",
  };

  return (
    <div class="Certificate">

        <CertBadge/>
 
        <CertHeading {...Presented_Data} />

        <PresentedName {...Presented_Data} />

    </div>
  )
}

export default Certificate
