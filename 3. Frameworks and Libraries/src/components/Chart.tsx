import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

interface ChartProps {
  data: number[];
  labels: string[];
}

const ChartComponent: React.FC<ChartProps> = ({ data, labels }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        const myChart = new Chart(ctx, {
          type: 'bar',
          data: {
            labels,
            datasets: [
              {
                label: 'Chart Data',
                data,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
              },
            ],
          },
        });

        // Toggle loading state once the chart is created
        setIsLoading(false);

        // Cleanup chart instance when component unmounts
        return () => {
          myChart.destroy();
        };
      }
    }
  }, [data, labels]);

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>Loading...</div>}
      <canvas ref={chartRef} />
    </div>
  );
};

export default ChartComponent;
