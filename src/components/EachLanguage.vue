<template>
 <div id="languages">
  <p v-for="language in languages" id="language" :key="language.id">{{ language }}</p>
 </div>
</template>

<script>
export default {
  name: "EachLanguage",
  props: {
    languages: {
     type: Array,
     required: true
    }
  }
}
</script>
