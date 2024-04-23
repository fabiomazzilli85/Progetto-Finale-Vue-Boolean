<template>
    <section>
        <img class="slider-resize" src="../assets/slider3.jpg" alt="">
        <!-- Ho inserito questa immagine anziché src="../assets/reklam.jpg", come richiesto dal compito, poiché non la visualizza, sebbene sia stata inserita correttamente.  -->
    </section>

    <section class="bg-black-image">
        <img class="image-resize" src="../assets/client2.png" alt="">
        <img class="image-resize" src="../assets/client3.png" alt="">
        <img class="image-resize" src="../assets/client4.png" alt="">
        <img class="image-resize" src="../assets/client7.png" alt="">
        <img class="image-resize" src="../assets/client9.png" alt="">
        <img class="image-resize" src="../assets/client10.png" alt="">
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.bg-black-image {
    background-color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 200px;
}

.image-resize {
    width: 150px;
    height: 150px;
    border: 1px solid white;
    border-radius: 20px;
    margin: 10px 5px;
}

.slider-resize {
    width: 100%;
}
</style>