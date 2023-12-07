import React, { lazy, Suspense } from 'react';
import './App.css';

const CMSSignatureFile = lazy(() => import('ContentApp/CMSSignatureFile'));

function App() {
  return (
    <div className="App">
      <div className="container-app w-1/2 p-4 mx-auto text-center ">
        <h1 className="font-bold">Контакты</h1>
        <p>ул. Сыганак, 62/3, БЦ «Viva Plaza»</p>
      </div>
      <Suspense fallback={<div>Loading Content...</div>}>
        <CMSSignatureFile />
      </Suspense>
    </div>
  );
}

export default App;
