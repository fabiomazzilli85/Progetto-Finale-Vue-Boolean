<template>
    <div class="container">
        <div class="flex-title card-title">
            <h1>Football Club <br>Sport Club</h1>
            <p class="paragraph-weight text-white">Private Football Matches</p>
            <button>Learn More ⭢</button>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
    background-image: url(../assets/slider2-1.jpg);
    background-size: cover;     
    background-position: center; 
    background-repeat: no-repeat;
    width: 100%;
    height: 600px; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px; 
}

h1 {
    text-align: center;
    font-weight: 800;
    color: white;
}

.text-white {
    color: white;
}

.paragraph-weight {
    font-weight: 700;
}

.card-title {
    padding: 55px 0;
}

button {
    padding: 15px 25px;
    border-radius: 15px;
    color: white;
    background-color: transparent;
    font-weight: 700;
    border: 1px solid white;
}

.flex-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
}
</style>