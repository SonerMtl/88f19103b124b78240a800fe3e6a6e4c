<template>
    <div class="pagination-wrapper">
        <button :disabled="currentPage === 0" @click="prev(currentPage - 1)" class="pagination-btn">Prev</button>
        {{ currentPage + 1 }} of {{ calcPageLength() }}
        <button :disabled="currentPage === calcPageLength() - 1 " @click="next(currentPage + 1)" class="pagination-btn">Next</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['currentPage', 'sortedList', 'pageSize'],
    methods: {
        prev(pageNumber) {
            this.$emit('prev', pageNumber)
        },
        next(pageNumber) {
            this.$emit('next', pageNumber)
        },
        calcPageLength() {
            return Math.ceil(this.sortedList.length / this.pageSize)
        }
    }
}
</script>

<style>

</style>