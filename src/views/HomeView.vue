<template>
  <div class="container mt-40">
    <div class="row">
      <div class="col-9">
        <Products v-if="products.length" :products="products" />
      </div>
      <div class="col-3">
          <form>
              <input type="text" placeholder="Search..." class="search-input" ref="searchInput">
          </form>
      </div>
    </div>
  </div>
</template>

<script>
import Products from "../components/Products.vue";

export default {
  components: {
    Products,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    fetch("https://teknasyon.netlify.app/.netlify/functions/products", {
      headers: { "X-Access-Token": "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" },
    })
      .then((res) => res.json())
      .then((data) => {
        this.products = data.products;
        console.log(this.products);
      });
  },
};
</script>

<style>
</style>