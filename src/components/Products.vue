<template>
  <Pagination
    :currentPage="currentPage"
    :pageSize="pageSize"
    :sortedList="sortedList"
    @prev="updatePage"
    @next="updatePage"
  />
  <div class="product-container">
    <router-link
      v-for="product in filteredList"
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
      sortedList: [],
    };
  },
  methods: {
      updatePage(number) {
          this.currentPage = number
      }
  },
  watch: {
      searchTerm (newVal) {
          if (newVal && newVal.length > 0) {
              this.currentPage = 0;
          }
          else if (newVal.length <= 0) {
              this.currentPage = 0;
          }
      }
  },
  computed: {
    filteredList() {
        let list = this.products;
        const keyword = this.searchTerm.toLowerCase();

        if (keyword.length > 0) {
            list = list.filter((product) => {
                return product.title
                .toLowerCase()
                .includes(this.searchTerm.toLowerCase());
            })
            this.sortedList = list;
        }
        else {
            this.sortedList = list;
        }

      return list.slice(
        this.currentPage * this.pageSize,
        (this.currentPage * this.pageSize) + this.pageSize
      );
    },
  }
};
</script>

<style>
</style>