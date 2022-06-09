<template>
  <div class="container mt-40">
    <div v-if="findProduct" class="product-detail">
      <div class="row">
        <div class="col-6">
          <div class="product-detail__img-container">
            <img
              :src="product.image.src"
              :alt="product.title"
              class="img-fluid"
            />
          </div>
        </div>
        <div class="col-6">
          <div class="product-detail__content">
            <h1>{{ product.title }}</h1>
            <div class="product-detail__content__prices">
                <span class="tag"> {{ product.tags }} </span>
              <span class="old-price" v-if="product.variants[0].compare_at_price">{{
                product.variants[0].compare_at_price + "$"
              }}</span>
              <span class="price">{{ product.variants[0].price + "$" }}</span>
            </div>
            <div class="product-detail__content__info">
                <p v-if="product.variants[0].weight">
                    <span>Weigth:</span> {{ product.variants[0].weight + product.variants[0].weight_unit }}
                </p>
                <p v-if="product.variants[0].option1">
                    <span>Length:</span> {{ product.variants[0].option1}}
                </p>
                <p>
                    <span>Inventory Quantity:</span> {{ product.variants[0].inventory_quantity}}
                </p>
                <p v-html="product.body_html">
                </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { useStore } from "../store/ProductStore.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = useStore();
    store.getData();
    const { products } = storeToRefs(store);

    const route = useRoute();

    return {
      route,
      products,
    };
  },
  data() {
    return {
      product: null,
    };
  },
  computed: {
    findProduct() {
      return (this.product = this.products.find((item) => {
        return item.id.toString() === this.route.params.id;
      }));
    },
  },
};
</script>

<style>
</style>