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
          type: "column"
        },
        title: {
          text: "<b>HR Summary, August 2020</b>"
        },
        xAxis: {
          categories: ["Jan", "Feb"],
          crosshair: true,
          title: {
            text: "<b>Category of Training</b>"
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: "<b>Facilities</b>"
          }
        },
        tooltip: {
          headerFormat:
            '<span style="font-size:10px">{point.key}</span><table>',
          pointFormat:
            '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
          footerFormat: "</table>",
          shared: true,
          useHTML: true
        },
        plotOptions: {
          column: {
            pointPadding: 0.2,
            borderWidth: 0
          }
        },
        series: [
          {
            name: "Tokyo",
            data: [10103, 9690]
          },
          {
            name: "New York",
            data: [8043, 3749]
          },
          {
            name: "London",
            data: [8523, 544]
          }
        ]
      }
    };
  }
};
</script>
