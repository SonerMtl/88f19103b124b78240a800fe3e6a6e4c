<template>
  <Pagination
    :products="products"
    :currentPage="currentPage"
    :pageSize="pageSize"
    :searchTerm="searchTerm"
    :filtList="filtList"
    :maxFilteredItem="maxFilteredItem"
    @page:update="updatePage"
    @page:filterUpdate="updateFilteredPage"
  />
  <div class="product-container" v-if="searchTerm">
    <router-link
      v-for="product in updateFiltered()"
      :key="product.id"
      :to="{
        name: 'ProductDetailsView',
        params: { id: product.id, items: product },
      }"
      class="product"
    >
      <div class="product__img-container">
        <img
          :src="product.image.src"
          alt="Product Image"
          class="product__img"
        />
      </div>
      <div class="product__info">
        <h3>{{ product.title }}</h3>
        <span class="product__info__price">
          {{ product.variants[0].price }}
        </span>
      </div>
    </router-link>
  </div>
  <div class="product-container" v-else>
    <router-link
      v-for="product in visibleItems"
      :key="product.id"
      :to="{
        name: 'ProductDetailsView',
        params: { id: product.id, items: product },
      }"
      class="product"
    >
      <div class="product__img-container">
        <img
          :src="product.image.src"
          :alt="product.title"
          class="product__img"
        />
      </div>
      <div class="product__info">
        <h3>{{ product.title }}</h3>
        <span class="product__info__price">
          {{ product.variants[0].price }}
        </span>
      </div>
    </router-link>
  </div>
</template>

<script>
import Pagination from "./Pagination.vue";

export default {
  components: {
    Pagination,
  },
  props: ["products", "searchTerm"],
  data() {
    return {
      currentPage: 0,
      pageSize: 10,
      visibleItems: [],
      filtList: [],
      maxFilteredItem: null,
    };
  },
  beforeMount: function () {
    this.updateVisibleItems();
  },
  methods: {
    /* -----Unfiltered----- */
    updatePage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateVisibleItems();
    },
    updateVisibleItems() {
      this.visibleItems = this.products.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      /* if visibleItems is 0, go back a page. */
      if (this.visibleItems.length == 0 && this.currentPage > 0) {
        this.updatePage(this.currentPage - 1);
      }
    },
    /* -----Filtered----- */
    updateFilteredPage(pageNumber) {
      this.currentPage = pageNumber;
      this.updateFiltered();
    },
    updateFiltered() {
      this.maxFilteredItem = this.filteredList.length;
      this.filtList = this.filteredList.slice(
        this.currentPage * this.pageSize,
        this.currentPage * this.pageSize + this.pageSize
      );

      /* if visibleItems is 0, go back a page. */
      if (this.filtList.length == 0 && this.currentPage > 0) {
        this.updateFilteredPage(this.currentPage - 1);
      }

      return this.filtList;
    },
  },
  computed: {
    filteredList() {
      return this.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
  updated: function () {},
};
</script>

<style>
</style>