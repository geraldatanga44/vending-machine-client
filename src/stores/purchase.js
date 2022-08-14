import { defineStore } from 'pinia'
import axios from 'axios'

export const useItemCartStore = defineStore({
    id: "card",
    state:() => ({
        purchasedItemsCart: []
    }),
    getters: {
        getPurchasedItems:(state) => {
            return state.purchasedItemsCart
        }
    },
    actions:{
        async getAllPurchasedItems(){
            this.purchasedItems = []
            try{
                this.purchasedItemsCart = await axios.get('https://localhost:7180/purchases/getAllPurchases').
                then((response) => response.json())
            }catch(error){
                this.error = error
            }
        }
    }
})
  