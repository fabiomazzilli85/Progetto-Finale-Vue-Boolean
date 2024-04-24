<template>
    <div>
        <section>
            <div class="container">
                <div class="flex-title card-title">
                    <h1>Football Club <br>Sport Club</h1>
                    <p class="paragraph-weight text-white">Private Football Matches</p>
                    <button>Learn More ⭢</button>
                </div>
            </div>
        </section>

        <section>
            <div class="card-title">
                <div class="flex-match">
                    <div class="flex-team">
                        <p class="team-weight">Istanbul Sports</p>
                        <img class="logo" src="../assets/club-11.png" alt="">
                    </div>

                    <div class="flex-team team-weight fs-VS">VS</div>

                    <div class="flex-team team-weight">
                        <p team-weight>United Fs Club</p>
                        <img class="logo" src="../assets/club-2.png" alt="">
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="flex-next-match">
                <p>May 21, 2022, 18.05 PM</p>
                <p>Expert Stadium</p>
            </div>
            <div class="flex-button mr-botton">
                <button class="button-next-match">View Match Details</button>
            </div>
        </section>
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

.flex-next-match {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.mr-main-page {
    padding: 50px 0;
}

.mr-botton {
    margin-bottom: 35px;
}

.logo {
    width: 70px;
    margin: 0 15px;
}

.button-next-match {
    background-color: black;
    color: white;
    padding: 15px 35px;
    border-radius: 25px;
    border: none;
    margin: 20px 0;
    cursor: pointer;
}

.flex-match {
    display: flex;
    justify-content: center;
    gap: 25px;
}

.flex-button {
    display: flex;
    justify-content: center;
    align-items: center;
}

.paragraph-weight {
    font-weight: 700;
}

.card-title {
    padding: 55px 0;
}

.flex-team {
    display: flex;
    justify-content: center;
    align-items: center;
}

.team-weight {
    font-weight: 900;
}

.fs-VS {
    font-size: 35px;
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