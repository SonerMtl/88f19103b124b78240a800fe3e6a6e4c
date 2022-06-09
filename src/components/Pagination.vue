<template>
    <div v-if="searchTerm && totalPagesFiltered() > 0" class="pagination-wrapper">
        <button :disabled="showPreviousLinkFiltered()" @click="updateFilteredPage(currentPage - 1)" class="pagination-btn">Prev</button>
        {{ currentPage + 1 }} of {{ totalPagesFiltered() }}
        <button :disabled="showNextLinkFiltered()" @click="updateFilteredPage(currentPage + 1)" class="pagination-btn">Next</button>
    </div>
    <div v-else-if="totalPages() > 0" class="pagination-wrapper">
        <button :disabled="showPreviousLink()" @click="updatePage(currentPage - 1)" class="pagination-btn">Prev</button>
        {{ currentPage + 1 }} of {{ totalPages() }}
        <button :disabled="showNextLink()" @click="updatePage(currentPage + 1)" class="pagination-btn">Next</button>
    </div>
</template>

<script>
export default {
    name: 'Pagination',
    props: ['products', 'currentPage', 'pageSize', 'searchTerm', 'filtList', 'maxFilteredItem'],
    methods: {
        /* ----Unfiltered---- */
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber)
        },
        totalPages() {
            return Math.ceil(this.products.length / this.pageSize)
        },
        showPreviousLink() {
            return this.currentPage === 0 ? true : false;
        },
        showNextLink() {
            return this.currentPage === (this.totalPages() - 1) ? true : false;
        },

        /* ----Filtered---- */
        updateFilteredPage(pageNumber) {
            this.$emit('page:filterUpdate', pageNumber)
        },
        totalPagesFiltered() {
            return Math.ceil(this.maxFilteredItem / this.pageSize)
        },
        showPreviousLinkFiltered() {
            return this.currentPage === 0 ? true : false;
        },
        showNextLinkFiltered() {
            return this.currentPage === (this.totalPagesFiltered() - 1) ? true : false;
        }
    }
}
</script>

<style>

</style>