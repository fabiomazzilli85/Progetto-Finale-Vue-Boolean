<template>
    <footer class="container">
        <div class="row footer-flex">

            <div class="mr-list-block col-md-2">
                <!-- Contenuto del blocco 1 -->
                <img :src="block1.imageSrc" />
                <ul>
                    <li class="color-block1" v-for="item in block1.listItems" :key="item.text">
                        {{ item.text }}
                    </li>
                </ul>
            </div>

            <div class="line-height-block2 col-md-6">
                <!-- Contenuto del blocco 2 -->
                <h2 class="footer-paragraph">{{ block2.title }}</h2>
                <p class="footer-paragraph">{{ block2.paragraph }}</p>
                <div class="footer-paragraph" v-for="(button, index) in block2.buttons" :key="index">
                    <button>{{ button.text }}</button>
                </div>
            </div>

            <div class="mr-list col-md-2">
                <!-- Contenuto del blocco 3 -->
                <div>
                    <h2>{{ block3.title }}</h2>
                    <div v-for="(item, index) in block3.listItems" :key="index">
                        <a :href="item.url">{{ item.text }}</a>
                    </div>
                </div>
            </div>


            <div class="col-md-2">
                <!-- Contenuto del blocco 4 -->
                <div>
                    <h2>{{ block4.title }}</h2>
                    <div v-for="(item, index) in block4.listItems" :key="index">
                        <a :href="item.url">{{ item.text }}</a>
                    </div>
                </div>
            </div>

        </div>
    </footer>
</template>

<script>
export default {
    name: 'PageFooter',
    props: {
        block1: Object,
        block2: Object,
        block3: Object,
        block4: Object,
    }
};
</script>

<style lang="scss" scoped>
footer {
    background-image: url("../assets/footer-bg-football.jpg");
    padding: 30px;
}

button {
    background-color: white;
    color: grey;
    padding: 15px 40px;
    border-radius: 999px;
    border: none;
    margin: 10px;
    text-align: center;
    width: 250px;
    cursor: pointer;
}

.footer-paragraph {
    width: 350px;
}

.mr-list {
    margin: 0 25px;
}

h2,
p,
.color-block1 {
    color: white;
}

.mr-list-block {
    margin-left: 20px;
    margin-top: 20px;
    line-height: 30px;
}

.line-height-block2 {
    line-height: 30px;
}

.footer-flex {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

a {
    color: white;
    text-decoration: none;
    line-height: 30px;
}
</style>