import React, { ReactElement, useState } from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root')!);

const App: React.FC = (): ReactElement => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const onClick = (): void => {
    console.info(input);
    setCode(input);
  };

  return (
    <div>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        <button type="button" onClick={onClick}>
          Submit
        </button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
