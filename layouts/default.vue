<template>
    <div >
        <Nav/>

       <div class="hf-page"> <slot /> </div>
        <Footer/>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hf-page{
    min-height: 70vh;
}
</style>