<template>
  <div  id="countries">
    <h4>Countries: </h4>
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
  margin-left: 60px;
  padding-top: 30px;
  padding-left: 50px;
}
</style>
