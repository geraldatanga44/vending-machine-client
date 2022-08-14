<template>
    <h1>
        Vending Machine Client
    </h1>
    <div class="itemContainer">
        <item-card title="Cola" :price="1.0"></item-card>
        <item-card title="chips" :price="0.50"></item-card>
        <item-card title="candy" :price="0.65"></item-card>
    </div>
    <p>{{card.purchasedItemsCart}}</p>
</template>

<script>
import ItemCard from './components/ItemCard.vue';

 export default{
    name: "App",
    components: {
        ItemCard
    }
 }
</script>

<style>
.itemContainer{
    flex-direction: row;
    display: flex;
}
</style>