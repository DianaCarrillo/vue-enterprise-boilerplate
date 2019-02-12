<template>
  <div>
    <button :id="id" @click="LanguagesFunction">{{country.name}} - {{ id }}</button>
    <Languages v-if="languages.length > 0" :languages="languages"/>
  </div>
</template>

 <script>
 import Languages from './Languages.vue'
 export default {
   name: "EachCountry",
   components: {
     Languages
   },
   props: {
     country: {
       type: Object,
       required: true
     }
   },
   data (){
     return {
       id: null,
       languages: []
     }
   },
   mounted () {
     this.id = this._uid
   },
   methods: {
   LanguagesFunction : function (event) {
    const languagesArray = [];
    this.country.languages.forEach(element => {
      const language = element.name
      return languagesArray.push(language)
    });
      this.languages = languagesArray
      return this.languages
    }
   }
 }
 </script>

 <style>
 button{
   margin-left: 60px;
   margin-bottom: 20px;
    width:180px;
    height:80px;
    background-color: white;
    font-size: 15px;
 }
 </style>
