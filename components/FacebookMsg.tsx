'use client'
import React, { Component} from 'react';
import { FacebookProvider, CustomChat } from 'react-facebook';

const FacebookMsg = () => {
    return (
      <FacebookProvider appId="1005003477209215" chatSupport>
        <CustomChat pageId="101093959401652" minimized={true}/>
      </FacebookProvider>    
    );
  }


export default FacebookMsg;