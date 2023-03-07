<script setup>
import { onMounted } from 'vue';
import { bookStore } from '../stores/books'


const books = bookStore()
const props = defineProps({ id: String })

const book = books.getBookByID(Number(props.id))
onMounted(() => {
    console.log("Edit book mounted")
})
</script>
<template>
    <h1>Edit Book</h1>
    <div class="container">
        <form @submit="books.editBook(book)">
            <div class="form-group col-sm-1200 mb-2">
                <label for="bookName">Name of Book:</label>
                <input type="text" class="form-control" id="bookName" v-model.trim="book.name">
            </div>
            <div class="form-group col-sm-1200 mb-2">
                <label for="authorName">Name of Author:</label>
                <input type="text" class="form-control" id="authorName" v-model.trim="book.author">
            </div>
            <button class="btn btn-primary" type="submit">Update</button>
        </form>
    </div>
</template>
<style>
label {
    display: block;
    margin-bottom: 8px;
    font-size: 16px;
}

input[type="text"] {
    display: block;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 16px;
    font-size: 16px;
    background-color: lightgrey;
    color: black;
}

.addBookButton {
    background-color: #008CBA;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 12px 24px;
    font-size: 16px;
    cursor: pointer;
}

.addBookButton:hover {
    background-color: #006080;
}

.book-button {
    background-color: white;
}
</style>