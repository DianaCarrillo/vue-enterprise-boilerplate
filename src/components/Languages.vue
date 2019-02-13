<template>
 <div>
  <h4 class="language">Languages: </h4>
  <EachLanguage :languages="languages"/>
 </div>
</template>

<script>
import EachLanguage from "./EachLanguage.vue"
export default {
  name: "Languages",
  components: {
    EachLanguage
  },
  props: {
    languages: {
     type: Array,
     required: true
    }
  }
}
</script>

<style>
.language{
  margin-left: 500px;
  position: relative;
  top: -150px;
}
</style>
