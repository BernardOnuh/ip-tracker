import React, { useState, useEffect } from 'react';

const IPAddressDisplay = () => {
  const [ipAddress, setIpAddress] = useState('Loading...');

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then(response => response.json())
      .then(data => setIpAddress(data.ip))
      .catch(error => {
        console.error('Error fetching IP:', error);
        setIpAddress('Unable to fetch IP');
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Your IP Address</h1>
        <div className="text-2xl text-gray-600" id="ip-address">
          {ipAddress}
        </div>
      </div>
    </div>
  );
};

export default IPAddressDisplay;