<template>
  <div class="container mt-40">
    <div class="row">
      <div class="col-9">
        <Products
          v-if="products.length"
          :products="products"
          :searchTerm="searchTerm"
        />
        <div v-else>Loading...</div>
      </div>
      <div class="col-3">
        <form @submit.prevent>
          <input
            type="text"
            placeholder="Search..."
            class="search-input"
            v-model="searchTerm"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products.vue";

import { useStore } from "../store/ProductStore.js";
import { storeToRefs } from "pinia";

export default {
  components: {
    Products,
  },
  setup() {
    const store = useStore();
    store.getData();
    const { products } = storeToRefs(store);
    return {
      products,
    };
  },
  data() {
    return {
      store: null,
      searchTerm: null,
    };
  },
};
</script>

<style>
</style>