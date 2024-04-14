import React from 'react';

function App() {
  const jsxElement = <h1>I am a JSX element</h1>;

  const Header = () => (
    <>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </>
  );

  const headerFragment = (
    <>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </>
  );

  const Footer = () => (
    <footer>
      <p>Copyright &copy; 2024</p>
    </footer>
  );

  return (
    <div>
      {jsxElement}
      <Header />
      {headerFragment}
      <Footer />
    </div>
  );
}

export default App;

