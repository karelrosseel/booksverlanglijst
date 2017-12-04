<template>
<div id="app" class="container">
  <div class="name">
    <h1>Boekverlanglijstje</h1>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3>Voeg een extra boek toe aan de lijst</h3>
      </div>
      <div class="panel-body">
        <form id="form" class="form-inline" v-on:submit.prevent="addBook">
          <div class="form-group">
            <label for="bookTitle">Titel:</label>
            <input type="text" id="bookTitle" class="form-control" v-model="newBook.title">
          </div>
          <div class="form-group">
            <label for="bookAutor">Auteur:</label>
            <input type="text" id="bookAuthor" class="form-control" v-model="newBook.author">
          </div>
          <div class="form-group">
            <label for="bookUrl">URL:</label>
            <input type="text" id="bookUrl" class="form-control" v-model="newBook.url">
          </div>
          <input type="submit" class="btn-primary" value="Voeg toe">
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading">
        <h3> boekenlijst</h3>
      </div>
      <div class="panel-body">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Auteur</th>
              <th>url</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="book in books">
            <td><a v-bind:href="book.url">{{book.title}}</a> </td>
            <td>{{book.author}}</td>
            <td>{{book.url}}</td>
            <td><span class="fa fa-trash icon-3x" v-on:click="removeBook(book)"></span></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import Firebase from 'firebase'

import toastr from 'toastr'
let config = {
  apiKey: "AIzaSyAxmcE4Q6xTkDbipH7WaqVMvqbPL7jlYsM",
  authDomain: "vuejs-firebase-01-5f5cc.firebaseapp.com",
  databaseURL: "https://vuejs-firebase-01-5f5cc.firebaseio.com",
  projectId: "vuejs-firebase-01-5f5cc",
  storageBucket: "vuejs-firebase-01-5f5cc.appspot.com",
  messagingSenderId: "400188982861"
}

let app = Firebase.initializeApp(config);
let db = app.database();

let booksRef = db.ref('books');

export default {
  name: 'app',
  firebase: {
    books: booksRef
  },
  data () {
    return {
      newBook: {
        title: '',
        author: '',
        url: '',
      }
    }
  },
  methods: {
    addBook: function (){
      booksRef.push(this.newBook);
      this.newBook.title = '';
      this.newBook.author ='';
      this.newBook.url = '';
    },
    removeBook: function(book){
      booksRef.child(book['.key']).remove();
      toastr.success("Je boek is verwijderd");
    }
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
