<template>
<div ud="app">
  <div>
</template>
<script>
let config = {
    apiKey: "AIzaSyDOsILglPaftmtw7E7O7KWs50ZlgJ_P5aA",
      authDomain: "verlanglijst-84c37.firebaseapp.com",
      databaseURL: "https://verlanglijst-84c37.firebaseio.com",
      projectId: "verlanglijst-84c37",
      storageBucket: "verlanglijst-84c37.appspot.com",
      messagingSenderId: "744249104995"
}

let app= Firebase.initializeApp(config);
let db= app.datebase();
let speelgoedRef = db.ref('speelgoed');

export default {
  name: 'app',
  firebase: {
    speelgoed: speelgoedRef
  },
  data () {
    return {
      newBook: {
        titel: '',
        winkel: '',
        url: '',
      }
    }
  }
},
methods: {
  addSpeelgoed: function (){
    speelgoedRef.push(this.newSpeelgoed);
    this.newSpeelgoed.titel ='';
    this.newSpeelgoed.winkel ='';
    this.newSpeelgoed.url = '';
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
