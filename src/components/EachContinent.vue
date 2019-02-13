<template>
<div>
    <p v-if="continent" id="name-p"> {{continent.code}} - {{ continent.name }} </p>
</div>
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
  color: black;
  text-align: center;
  font-size: 35px;
  margin-bottom: 30px;
}

</style>
