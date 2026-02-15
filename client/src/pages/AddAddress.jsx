import React, { useState } from 'react';
import { assets } from '../assets/assets';

const InputFields = ({ type, placeholder, name, handleChange, address }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={handleChange}
      name={name}
      value={address[name]}
      required
      className="border p-2 w-full rounded"
    />
  );
};

const AddAddress = () => {
  const [address, setAddress] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prevAddress => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(address);
  };

  return (
    <div className='mt-16 pb-16'>
      <p className='text-2xl md:text-3xl text-gray-500'>
        Add Shipping <span className='font-semibold text-primary'>Address</span>
      </p>

      <div className='flex flex-col-reverse md:flex-row justify-between mt-10'>
        <div className='flex-1 max-w-md'>
          <form onSubmit={onSubmitHandler} className='space-y-3 mt-6 text-sm'>
            <div className="grid grid-cols-2 gap-4">
              <InputFields
                handleChange={handleChange}
                address={address}
                name="firstName"
                type="text"
                placeholder="First Name"
              />

              <InputFields
                handleChange={handleChange}
                address={address}
                name="lastName"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <InputFields handleChange={handleChange} address={address} name='email'
            type='email' placeholder='Email address' />

            <InputFields handleChange={handleChange} address={address} name='street'
            type='text' placeholder='Street' />

            <div className="grid grid-cols-2 gap-4">
              <InputFields
                handleChange={handleChange}
                address={address}
                name="city"
                type="text"
                placeholder="City"
              />

              <InputFields
                handleChange={handleChange}
                address={address}
                name="state"
                type="text"
                placeholder="State"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <InputFields
                handleChange={handleChange}
                address={address}
                name="zipCode"
                type="text"
                placeholder="Zip Code"
              />

              <InputFields
                handleChange={handleChange}
                address={address}
                name="country"
                type="text"
                placeholder="Country"
              />
            </div>
            <InputFields handleChange={handleChange} address={address} name='phone'
               type='text' placeholder='Phone Number' />

            <button className='w-full mt-6 bg-primary text-white py-3 hover:bg-primary-dull 
            transition cursor-pointer uppercase'>Save Address</button>
          </form>
        </div>

        <img
          className='md:mr-16 mb-16 md:mt-0'
          src={assets.add_address_iamge}
          alt='add address'
        />
      </div>
    </div>
  );
};

export default AddAddress;
