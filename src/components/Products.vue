<template>
  <div class="product-container">
    <router-link
      v-for="product in products"
      :key="product"
      :to="{ name: 'ProductDetailsView', params: { id: product.id } }"
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
export default {
  props: ["products"],
  data() {
    return {};
  },
  methods: {
    aasd() {
      console.log(this.products);
    },
  },
};
</script>

<style>
</style>