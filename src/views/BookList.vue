<script setup>
import { bookStore } from '../stores/books'
import { ref, reactive, onMounted, computed } from 'vue'
const books = bookStore()
const updatedBook = ref()

const editBookId = ref(null)

const newBook = reactive({
    'name': '',
    'author': ''
})



onMounted(() => {
    console.log("Booklist mounted")
})

function updateBook() {
    books.editBook(updatedBook.value)
    editBookId.value = null
}

function startToUpdateBook(book) {
    updatedBook.value = JSON.parse(JSON.stringify(book))
    editBookId.value = book.id
}

</script>

<template>
    <div class="container">
        <form class="form-horizontal" @submit="books.addBook(newBook.name, newBook.author)">
            <div class="form-group row">
                <label for="bookName" class="col-sm-2 col-form-label">Title:</label>
                <div class="col-sm-7">
                    <input required type="text" class="form-control" id="bookName" v-model.trim="newBook.name">
                </div>
            </div>

            <div class="form-group row">
                <label for="authorName" class="col-sm-2 col-form-label">Author:</label>
                <div class="col-sm-7">
                    <input required type="text" class="form-control" id="authorName" v-model.trim="newBook.author">
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
                <td>
                    {{ book.id }}
                </td>
                <td>
                    <template v-if="editBookId != book.id">{{ book.name }}</template>
                    <input required v-if="editBookId === book.id" type="text" class="form-control" id="bookName"
                        v-model="updatedBook.name">
                </td>
                <td>
                    <template v-if="editBookId != book.id">{{ book.author }}</template>
                    <input required v-if="editBookId === book.id" type="text" class="form-control" id="bookAuthor"
                        v-model="updatedBook.author">
                </td>
                <td>
                    <div class="d-flex justify-content-center">
                        <template v-if="editBookId != book.id">
                            <button @click="startToUpdateBook(book)" class="btn btn-outline-primary btn-sm me-2">
                                <i class="fas fa-pencil-alt"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm" @click="books.removeBook(book)">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </template>
                        <template v-if="editBookId === book.id">
                            <button class="btn btn-outline-primary btn-sm me-2" @click="updateBook()">
                                <i class="fas fa-check"></i>
                            </button>
                            <button class="btn btn-outline-danger btn-sm" @click="editBookId = null">
                                <i class="fas fa-xmark"></i>
                            </button>
                        </template>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style></style>