<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOptions: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie"
        },
        title: {
          text: "<b>Consumption By Methods, August 2016</b>"
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        accessibility: {
          point: {
            valueSuffix: "%"
          }
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              connectorColor: "silver"
            }
          }
        },
        series: [
          {
            name: "Share",
            data: [
              { name: "Chrome", y: 61.41 },
              { name: "Internet Explorer", y: 11.84 },
              { name: "Firefox", y: 10.85 },
              { name: "Edge", y: 4.67 },
              { name: "Safari", y: 4.18 },
              { name: "Other", y: 7.05 }
            ]
          }
        ]
      }
    };
  }
};
</script>
