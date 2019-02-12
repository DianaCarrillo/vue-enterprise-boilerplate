<template>
  <div>
    <p v-for="language in languages" :key="language.id">{{ language }}</p>
  </div>
</template>

<script>
export default {
  name: "Languages",
  props: {
    languages: {
     type: Array,
     required: true
    }
  }
}
</script>
