import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function EmergencyContacts() {
  const contacts = [
    {
      name: 'Mr Vamshi',
      phone: '123-456-7890',
      role: 'First point',
    },
    {
      name: 'Revanth',
      phone: '123-456-7890',
      role: 'General Emergency',
    },
    {
      name: 'Ravi Prakash',
      phone: '123-456-7890',
      role: 'Medical Emergency',
    },
    {
      name: 'Ravi Prakash',
      phone: '123-456-7890',
      role: 'Fire Emergency',
    },
    {
      name: 'Navaneeth',
      phone: '123-456-7890',
      role: 'Security Emergency',
    }
  ];
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  useEffect(() => {
    setEmergencyContacts(() => contacts.map((contact, i) => 
      <a key={i} href={'tel:+'+contact.phone} className='contact-number' title="click to Call">
          <span className='name'>{contact.name}</span>
          <span></span>
          <span>{contact.role}</span>
      </a>  
    ));
  });
  return (
    <section className='emergency-contacts animate__animated animate__fadeIn'>
        <h1 className='page-title'>Emergency Contacts</h1>
        <div className='contacts-list'>
          {
          emergencyContacts
          }
        </div>
    </section>
  )
}
