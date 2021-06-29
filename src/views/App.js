import logo from 'assets/images/logos/bepark-logo.svg';

function App() {
  return (
    <div className="app">
        <header className="app-header">
            <img src={logo} className="app-header__logo" alt="BePark" />
        </header>
        <main className="app-content">
            <h1>Planning Period</h1>
        </main>
    </div>
  );
}

export default App;
