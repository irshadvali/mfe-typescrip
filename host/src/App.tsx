import React from 'react';
//import DashboardApp from './mfeapp/DashboardApp';
//import DashC from './mfeapp/DashC';
 const DashboardApp = React.lazy(() => import("dashboard/DashboardApp"));
function App() {
  return (
    <div>
      <p>Irshad Vali</p>
      <DashboardApp/>
    </div>
  );
}

export default App;
