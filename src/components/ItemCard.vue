<template>
 <div class="btnContainer">
    <button class="btnRound" onclick="onPurchase">
    <div>
        {{title}}
    </div> 
    <div>
        ${{price}}
    </div>
    </button>
    
 </div>

</template>

<script>
export default{
    name: "ItemCard",
    props: {
        title: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        }
    }
}
</script>

<style>
    .btnContainer{
        width: 120px;
        height: 100px;
    }
    .btnRound{
        border-radius: 250px;
        width: 50%;
        height: 100%;
        background-color: antiquewhite;
        border-width: 0px;
        cursor: pointer;
    }
    h3{
        text-align: center;
    }
</style>