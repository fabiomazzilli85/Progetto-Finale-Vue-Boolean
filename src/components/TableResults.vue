<template>
    <section>
        <table class="table table-dark">
            <thead>
                <tr class="black">
                    <th scope="col">Team</th>
                    <th scope="col">W</th>
                    <th scope="col">D</th>
                    <th scope="col">L</th>
                    <th scope="col">PTS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="table-light">1 Istanul Sports</td>
                    <td class="table-light">18</td>
                    <td class="table-light">2</td>
                    <td class="table-light">0</td>
                    <td class="table-light">42</td>
                </tr>

                <tr>
                    <td class="table-light">United Fs Club</td>
                    <td class="table-light">14</td>
                    <td class="table-light">2</td>
                    <td class="table-light">1</td>
                    <td class="table-light">35</td>
                </tr>

                <tr>
                    <td class="table-light">Shalke Club</td>
                    <td class="table-light">13</td>
                    <td class="table-light">3</td>
                    <td class="table-light">0</td>
                    <td class="table-light">32</td>
                </tr>

                <tr>
                    <td class="table-light">Inter Club</td>
                    <td class="table-light">13</td>
                    <td class="table-light">2</td>
                    <td class="table-light">1</td>
                    <td class="table-light">31</td>
                </tr>

                <tr>
                    <td class="table-light">Madrid Club</td>
                    <td class="table-light">12</td>
                    <td class="table-light">1</td>
                    <td class="table-light">2</td>
                    <td class="table-light">30</td>
                </tr>

                <tr>
                    <td class="table-light">Shalke Club</td>
                    <td class="table-light">11</td>
                    <td class="table-light">0</td>
                    <td class="table-light">3</td>
                    <td class="table-light">28</td>
                </tr>

                <tr>
                    <td class="table-light">Arsenal Club</td>
                    <td class="table-light">10</td>
                    <td class="table-light">5</td>
                    <td class="table-light">0</td>
                    <td class="table-light">26</td>
                </tr>

                <tr>
                    <td class="table-light">Bayern Club</td>
                    <td class="table-light">10</td>
                    <td class="table-light">2</td>
                    <td class="table-light">2</td>
                    <td class="table-light">24</td>
                </tr>

                <tr>
                    <td class="table-light">Atletico Club</td>
                    <td class="table-light">9</td>
                    <td class="table-light">0</td>
                    <td class="table-light">4</td>
                    <td class="table-light">20</td>
                </tr>
            </tbody>
        </table>
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
    height: 200px;
    object-fit: cover;
}
</style>