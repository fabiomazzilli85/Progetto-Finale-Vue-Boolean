<template>
    <section class="bg-white pd-bottom-section">
        <div class="article">
            <img class="like" src="../assets/like.png" alt="">
            <h2 class="color-text">Recent News & Articles</h2>
            <p class="color-text">Be aware of the football world.</p>
        </div>

        <div class="flex-article">
            <div class="card-article">
                <img src="../assets/news1-1-223x223.png" alt="">
                <p class="color-text">29.05.2022</p>
                <h2 class="color-text">What Is Football?</h2>
                <p class="color-text text-width">Football is a sport that is know as a ball game and loved by[...]</p>
                <button class="more-button">More</button>
            </div>

            <div class="card-article">
                <img src="../assets/news3-1-223x223.png" alt="">
                <p class="color-text">29.05.2022</p>
                <h2 class="color-text">Footbal Rules</h2>
                <p class="color-text text-width">GOLDEN GOAL: in a football match, the goal scored by one of the teamin [...]</p>
                <button class="more-button">More</button>
            </div>

            <div class="card-article">
                <img src="../assets/news2-1-223x223.png" alt="">
                <p class="color-text">29.05.2022</p>
                <h2 class="color-text">Football Features</h2>
                <p class="color-text text-width">Football; it is an aerobic-based anareobic sport in which jumps, kicks, turns [...]</p>
                <button class="more-button">More</button>
            </div>

            <div class="card-article">
                <img src="../assets/news4-1-223x223.png" alt="">
                <p class="color-text">29.05.2022</p>
                <h2 class="color-text">Football Terms</h2>
                <p class="color-text text-width">Golden Goal: in a football match, the goal scored by one of the teamin[...]</p>
                <button class="more-button">More</button>
            </div>
        </div>
    </section>
</template>

<script>
</script>

<style lang="scss" scoped>
.bg-white {
    background-color: #f3f3f3;
    padding: 20px 0;
}

.like {
    width: 100px;
}

.color-text {
    color: black;
}

.text-width {
    width: 220px;
}

.more-button {
    background-color: black;
    color: white;
    padding: 15px 35px;
    border-radius:25px;
    margin: 15px 0;
}

.article {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    margin: 35px 0;
}

.flex-article {
    display: flex;
    gap: 25px;
    justify-content: center;
}

.card-article {
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid lightgrey;
    line-height: 27px;
    padding: 0 13px;
}

.pd-bottom-section {
    padding-bottom: 60px;
}
</style>