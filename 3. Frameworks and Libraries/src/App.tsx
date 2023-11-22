import React from 'react';
import ChartComponent from './components/Chart';

const App: React.FC = () => {
  const data = [12, 19, 3, 5, 2, 3];
  const labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  return (
    <div>
      <div className="container mt-4 h-50 ">
        <h1>Chart Example</h1>
        <ChartComponent data={data} labels={labels} />
      </div>
    </div>
  );
};

export default App;
