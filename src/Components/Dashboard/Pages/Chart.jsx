import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

export default function Chart() {
  useEffect(() => {
    const chart = Highcharts.chart('container', {

        chart: {
            type: 'column'
        },
    
        title: {
            text: 'Monthly Patient Attendance and Revenue Analysis'
        },
    
      
    
        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },
    
        xAxis: {
            categories: ['Sep', 'Oct', 'Nov'],
            labels: {
                x: -10
            }
        },
    
        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Amount'
            }
        },
    
        series: [{
            name: 'Total Patient',
            data: [38, 51, 34]
        }, {
            name: 'Appointments',
            data: [31, 26, 27]
        }, {
            name: 'Revenue',
            data: [38, 42, 41]
        }],
    
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    });
  
    

  }, []);

  return (
    <figure className="highcharts-figure mt-4" style={{width : '60vw' , margin : 'auto'}}>
      <div id="container"></div>
      <p className="highcharts-description">
      
      </p>
    </figure>
  );
}
