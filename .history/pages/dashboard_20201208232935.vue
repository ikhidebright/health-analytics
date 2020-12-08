<template>
  <div>
<<<<<<< HEAD
    <h1>Hello world</h1>
=======
    <!-- <v-row class="pa-0 ml-2">
      <v-col v-for="data in inforData" :key="data.id">
        <infoCard :data="data" />
      </v-col>
    </v-row> -->
    <v-row>
      <v-col cols="12" lg="6" md="6" sm="12">
        <pieChart />
      </v-col>
      <v-col cols="12" lg="6" md="6" sm="12">
        <columnChart />
      </v-col>
    </v-row>
>>>>>>> 8f2b450b1ae17681a5bf8b08cc86be573145a606
  </div>
</template>

<script>
import columnChart from "@/components/columnChart";
import pieChart from "@/components/pieChart";
// import infoCard from "@/components/dashboard/infoCard";

export default {
<<<<<<< HEAD
  layout: "dashboard"
=======
  name: "dashboard",
  layout: 'dashboard',
  data() {
    return {
      inforData: [
        {
          id: 1,
          title: "NATIONAL CONTRACEPTIVE PREVALENCE RATES",
          count: "17% (NDHS 2018)",
          color: "blue lighten-2",
          icon: ""
        },
        {
          id: 2,
          title: "NATIONAL MODERN CONTRACEPTIVE PREVALENCE RATE (mCPR) TARGET",
          count: "27% (by 2023)",
          color: "green darken-2",
          icon: ""
        },
        {
          id: 3,
          title: "TOTAL NUMBER OF TRAININGS CONDUCTED",
          count: "1, 644",
          color: "red darken-2",
          icon: ""
        },
        {
          id: 4,
          title: "TOTAL HEALTH WORKERS TRAINED",
          count: "23, 648",
          color: "orange darken-2",
          icon: ""
        }
      ]
    };
  },
  components: {
    columnChart,
    pieChart,
    // infoCard
  }
>>>>>>> 8f2b450b1ae17681a5bf8b08cc86be573145a606
};
</script>
