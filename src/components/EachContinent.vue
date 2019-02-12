<template>
  <ul v-if="continent">
    <li id="name">
        <p id="name-p">{{ continent.name }} </p>
    </li>
  </ul>
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
}

</style>
