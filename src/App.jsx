import React from 'react';
import PageTitle from './Components/PageTitle';
import AppHeader from './Components/AppHeader';
import AppContent from './Components/AppContent';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='container'>
      <PageTitle>ToDo List</PageTitle>
     <AppHeader></AppHeader>
     <AppContent></AppContent>
     <Toaster
        // position="bottom-right"
        toastOptions={{
          style: {
            fontSize: '1.4rem',
          },
        }}
      />
    </div>
  );
};

export default App;
