<template>
    <div class="container">
        <h2>Upcoming Matches</h2>
        

        <div class="flex-match">
            <div class="flex-club font-club">
                Shalke Club
                <img class="logo" src="../assets/league-club-3.png">
            </div>
            <div class="vs-font">VS</div>
            <div class="flex-club font-club">
                Inter Club
                <img class="logo" src="../assets/league-club-4.png">
            </div>
        </div>
        <div class="ticket">
            <p>October 20, 2022, 17.00 PM</p>
            <p>Espert Stadium</p>
        </div>


        <div class="flex-match">
            <div class="flex-club font-club">
                Atletico Club
                <img class="logo" src="../assets/club-9.png">
            </div>
            <div class="vs-font">VS</div>
            <div class="flex-club font-club">
                Shalke Club
                <img class="logo" src="../assets/club-6.png">
            </div>
        </div>
        <div class="ticket">
            <p>October 20, 2022, 17.00 PM</p>
            <p>Espert Stadium</p>
        </div>

        <div class="flex-match">
            <div class="flex-club font-club">
                Unied Fs Club
                <img class="logo" src="../assets/club-2.png">
            </div>
            <div class="vs-font">VS</div>
            <div class="flex-club font-club">
                Bayern Club
                <img class="logo" src="../assets/club-11.png">
            </div>
        </div>
        <div class="ticket">
            <p>October 20, 2022, 17.00 PM</p>
            <p>Espert Stadium</p>
         </div>

        <div class="flex-match">
            <div class="flex-club font-club">
                Arsenal Club
                <img class="logo" src="../assets/club-7.png">
            </div>
            <div class="vs-font">VS</div>
            <div class="flex-club font-club">
                Atletico Club
                <img class="logo" src="../assets/club-9.png">
            </div>
        </div>
        <div class="ticket">
             <p>October 20, 2022, 17.00 PM</p>
            <p>Espert Stadium</p>
        </div>


        <div class="flex-match">
             <div class="flex-club font-club">
                 Istanbul Sportds
                 <img class="logo" src="../assets/club-11.png">
            </div>
            <div class="vs-font">VS</div>
            <div class="flex-club font-club">
                United Fs Club
                <img class="logo" src="../assets/club-2.png">
            </div>
        </div>
        <div class="ticket">
            <p>October 20, 2022, 17.00 PM</p>
            <p>Espert Stadium</p>
        </div>
    </div>
</template>

<script>
</script>

<style lang="scss" scoped>
.container {
    background-image: url(../assets/saha.jpg);
    width: 100%;
    height: 750px;
    padding: 20px;
}

h2 {
    margin: 15px 0;
    text-align: center;
    color: white;
}

.vs-font {
    font-size: 18px;
    font-weight: 800;
    color: white;
}

p {
    color: white;
    font-size: 20px;
}

.flex-match {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    margin: 20px 0;
    background-color: rgba(200, 200, 255, 0.3);
}

.flex-club {
    display: flex;
    align-items: center;
    gap: 10px;
}

.font-club {
    color: white;
    font-size: 22px;
}

.logo {
    width: 65px;
    aspect-ratio: 1;
}

.ticket {
    display: flex;
    justify-content: center;
    gap: 25px;
    background-color: rgba(50, 50, 150, 0.4);
}
</style>