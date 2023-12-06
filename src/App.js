import React, { lazy, Suspense } from 'react';
import './App.css';

const Form = lazy(() => import('ContentApp/Form'));

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Контакты</h1>
        <p>ул. Сыганак, 62/3, БЦ «Viva Plaza»</p>
      </div>
      <Suspense fallback={<div>Loading Header...</div>}>
        <Form />
      </Suspense>
    </div>
  );
}

export default App;
