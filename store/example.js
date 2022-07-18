import { createContext } from 'react';

const ExampleContext = createContext();

const ExampleProvider = ({ children }) => {
  const test = () => {
    console.log('test');
  };

  return (
    <ExampleContext.Provider value={{ test }}>
      {children}
    </ExampleContext.Provider>
  );
};

export { ExampleProvider, ExampleContext };
