<template>
 <div>
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
#language{
  margin-left: 700px;
  position: relative;
  top: -120px;
}
</style>
