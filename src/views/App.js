import logo from 'assets/images/logos/bepark-logo.svg';

import PlanningPeriod from "components/planning-period/PlanningPeriod.js";
import BreadCrumb from "components/breadcrumb/Breadcrumb.js";

function App() {
  return (
    <div className="app">
        <header className="app-header">
            <img src={logo} width="27" height="27" className="app-header__logo" alt="BePark" />
        </header>
        <main className="app-content">
            <h1>Planning Period</h1>
            <BreadCrumb />
            <PlanningPeriod />
        </main>
    </div>
  );
}

export default App;
