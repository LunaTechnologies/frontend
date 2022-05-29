import React, { createContext, useState } from 'react';

export const PostContext = createContext();

export const PostProvider = ({ children }) => {
  const [title, setTitle] = useState('');
  // const [images, setImages] = useState([]);
  const [images, setImages] = useState({});
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [currency, setCurrency] = useState('Lei');
  const [payedPer, setPayedPer] = useState('Day');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <PostContext.Provider
      value={{
        title,
        setTitle,
        images,
        setImages,
        description,
        setDescription,
        price,
        setPrice,
        currency,
        setCurrency,
        payedPer,
        setPayedPer,
        phoneNumber,
        setPhoneNumber,
      }}>
      {children}
    </PostContext.Provider>
  );
};
