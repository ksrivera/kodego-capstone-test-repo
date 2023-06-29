import React from 'react'

const Dashboard = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "May", "May"],
    datasets: [
      {
        data:[0.1, 0.4, 0.2, 0.3, 0.7, 0.4, 0.6, 0.3],
      },
    ],
  };
  
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    elements: {
      line: {
        tension: 0,
        borderWidth: 2,
        borderColor: "rgba(47,97,68,1)",
        fill:"start",
        backgroundColor: "rgba(47,97,68,0.3)",
      },
      point: {
        radius: 0,
        hitRadius: 0,
      },
    },
    scales: {
      xAxis:{
        display: false,
      },
      yAxis: {
        display: false,
      },
    },
  };

  return (
    <div><p> </p> 
        <line data={data} width={100} height={40} options={options} />
        <p></p>
    </div>
  )
}

export default Dashboard