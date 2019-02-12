<template>
  <div id="countries">
    <!-- <p>Countries</p> -->
    <EachCountry  v-for="country in continent.countries" :key= "country.id" :country="country" />
  </div>
</template>

<script>
import EachCountry from './EachCountry.vue'
export default {
  name: "Countries",
  components: {
    EachCountry
  },
  props: {
    continent: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
#countries{
  /* margin-left: 100px;
  margin-right: 900px; */
  padding-top: 30px;
  padding-left: 50px;
  /* background-color: pink */
}
</style>
