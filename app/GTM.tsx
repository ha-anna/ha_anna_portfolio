'use client';
import React, { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GTMWrapper: React.FC = () => {
  useEffect(() => {
    const tagManagerArgs = {
      gtmId: 'GTM-KX7XWVM',
    };

    TagManager.initialize(tagManagerArgs);
  }, []);

  return null;
};

export default GTMWrapper;
