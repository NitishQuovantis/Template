import React from 'react';

export type AppContextType = {
  theme: Object;
};

const AppContext = React.createContext<Partial<AppContextType>>({});

export default AppContext;
