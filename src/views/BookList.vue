<script setup>
import { bookStore } from '../stores/books'
import { ref, reactive, onMounted } from 'vue'
const books = bookStore()

const newBook = reactive({
    'name': '',
    'author': ''
})

onMounted(() => {
    console.log("Booklist mounted")
})

</script>

<template>
    <div class="container">
        <form class="form-horizontal" @submit="books.addBook(newBook.name, newBook.author)">
            <div class="form-group row">
                <label for="bookName" class="col-sm-2 col-form-label">Title:</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="bookName" v-model.trim="newBook.name">
                </div>
            </div>

            <div class="form-group row">
                <label for="authorName" class="col-sm-2 col-form-label">Author:</label>
                <div class="col-sm-7">
                    <input type="text" class="form-control" id="authorName" v-model.trim="newBook.author">
                </div>
                <div class="col-sm-3 row">
                    <button class="btn btn-outline-primary col-lg-12" type="submit">Add Book</button>
                </div>
            </div>

        </form>
    </div>


    <br>


    <table class="table table-striped table-bordered">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Author</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in books.books" :key="book.id">
                <td>{{ book.id }}</td>
                <td>{{ book.name }}</td>
                <td>{{ book.author }}</td>
                <td>
                    <div class="d-flex justify-content-center">
                        <router-link :to="{ name: 'EditBook', params: { id: book.id } }">
                            <button class="btn btn-outline-primary btn-sm me-2">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                        </router-link>
                        <button class="btn btn-outline-danger btn-sm" @click="books.removeBook(book)">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style></style>