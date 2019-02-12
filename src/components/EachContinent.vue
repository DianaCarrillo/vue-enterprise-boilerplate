<template>
    <p v-if="continent" id="name-p">{{ continent.name }} </p>
</template>

<script>
export default {
  name: "EachContinent",
  props: {
   continent: {
     type: Object,
     required: true
   }
  }
}
</script>

<style>
#name-p{
  text-align: center;
  font-size: 35px;
  margin-bottom: 70px;
}

</style>
