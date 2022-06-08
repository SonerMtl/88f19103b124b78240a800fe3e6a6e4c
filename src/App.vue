<template>

</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {
    fetch('https://teknasyon.netlify.app/.netlify/functions/products', { headers: { 'X-Access-Token' : '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' }})
      .then(res => res.json())
      .then(data => {console.log(data.products)})
  }
}
</script>

<style>

</style>
