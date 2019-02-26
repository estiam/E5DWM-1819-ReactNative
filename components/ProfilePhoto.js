import React, { Component } from 'react';
import { Image } from 'react-native';

const ProfilePhoto = ({ size, url }) => {
    return (
      <Image
        style={{ width: size, height: size }}
        source={{ uri: url}}
      />
    );
}

export default ProfilePhoto;