<template>
  <div>
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
