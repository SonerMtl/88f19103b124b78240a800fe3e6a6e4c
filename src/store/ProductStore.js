import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => ({
        products: []
    }),
    actions: {
        getData() {
            fetch("https://teknasyon.netlify.app/.netlify/functions/products", {
                headers: { "X-Access-Token": "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" },
            })
                .then((res) => res.json())
                .then((data) => {
                    this.products = data.products; 
                });
        }
    }
})


