import { defineStore } from "pinia";
import { useLocalStorage } from '@vueuse/core'


export const bookStore = defineStore({
    id: 'books',
    state: () => ({
        books: useLocalStorage('books[]', []),
        id: useLocalStorage('bookId', 0)
    }),
    actions: {
        addBook(name, author) {
            this.books.push({
                "id": this.id++,
                "name": name,
                "author": author
            })
        },
        removeBook(bookToRemove) {
            this.books.splice(this.books.findIndex(a => a.id === bookToRemove.id), 1)
        },
        editBook(bookToEdit) {
            this.books[this.books.findIndex(x => x.id === bookToEdit.id)] = bookToEdit
        },
        getBookByID(id) {
            return this.books.find(x => x.id === id);
        }
    }
})