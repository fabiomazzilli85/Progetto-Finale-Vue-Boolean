<template>
    <div class="container">
        <section class="players">
            <h2>Players</h2>

            <div class="flex-players">
                <div class="card-player">
                    <img class="foto-player" src="../assets/player1.jpg">
                    <h2>07</h2>
                    <p>Adam Brown</p>
                </div>

                <div class="card-player">
                    <img class="foto-player" src="../assets/player2.jpg">
                    <h2>09</h2>
                    <p>Michael Kayn</p>
                </div>

                <div class="card-player">
                    <img class="foto-player" src="../assets/player3.jpg">
                    <h2>11</h2>
                    <p>Michael Lee - Forwarder</p>
                </div>

                <div class="card-player">
                    <img class="foto-player" src="../assets/player4.jpg">
                    <h2>15</h2>
                    <p>Ethan Smith - Midfielder</p>
                </div>
            </div>
            <div class="flex-button">
                <button class="button-players">View All Player</button>
            </div>
        </section>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.players {
    background-image: url(../assets/player.jpg);
    height: 700px;
}

.flex-players {
    display: flex;
    align-items: center;
    justify-content: center;
}

h2 {
    text-align: center;
    color: white;
    padding: 30px 0;
}

.foto-player {
    width: 250px;
    border-radius: 25px;
    border-bottom-left-radius: 40px;
    border-bottom-right-radius: 40px;
}

.card-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
    color: white;
    margin: 0 10px;
    padding-bottom: 20px;
    border-radius: 40px;
}

.button-players {
    background-color: black;
    color: white;
    font-weight: 700;
    padding: 15px 40px;
    border-radius: 25px;
    border: 1px solid white;
    cursor: pointer;
}

.flex-button {
    display: flex;
    justify-content: center;
    margin-top: 40px;
}
</style>