import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { View } from './Component/View';
import { Detail } from './Component/Detail';
import { UserContextProvider } from './Component/ContextAPI/ContextProvider';


function App() {
  return (
    <UserContextProvider>
    <BrowserRouter>
    <Routes>
      <Route index element={<View/>} />
      <Route path='detail' element={<Detail/>} />
    </Routes>
    
    </BrowserRouter>
    </UserContextProvider>
    
    
  );
}

export default App;
