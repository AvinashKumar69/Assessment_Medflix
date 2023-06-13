import React from 'react';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

const RootNavigation = () => {
  const isUserAuthenticated = true; // TODO: this variable will come either from ContextAPI or from Redux

  return isUserAuthenticated ? <MainStack /> : <AuthStack />;
};

export default RootNavigation;
