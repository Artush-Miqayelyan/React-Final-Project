import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';

import { useSelector } from 'react-redux';
import {
  selectCurrentUser
} from '@/app/redux/features/currentUser/currentUserSlice';

const AvatarUpload = ({image , setImage}) => {

  const currentUser = useSelector(selectCurrentUser)

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        accept="image/*"
        id="avatar-input"
        type="file"
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
      {image ? (
        <Avatar
          src={image}
          alt="Avatar"
          sx={{ width: 100, height: 100 }}
        />
      ) : (
        <label htmlFor="avatar-input">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <Avatar sx={{width: 80 , height: 80}}
              src={currentUser.AvatarUrl}
            />
          </IconButton>
        </label>
      )}
    </div>
  );
};

export default AvatarUpload;