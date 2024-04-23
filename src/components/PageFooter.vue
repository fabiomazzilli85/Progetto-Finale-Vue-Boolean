<template>
    <footer class="container">
        <div class="row">
           
            <div class="mr-list-block col-md-2">
                <!-- Contenuto del blocco 1 -->
                <img :src="block1.imageSrc" />
                <ul>
                    <li v-for="item in block1.listItems" :key="item.text">
                        {{ item.text }}
                    </li>
                </ul>
            </div>

            <div class="col-md-6">
                <!-- Contenuto del blocco 2 -->
                <h2>{{ block2.title }}</h2>
                <p class="footer-paragraph">{{ block2.paragraph }}</p>
                <div>
                    <button v-for="(button, index) in block2.buttons" :key="index">
                        {{ button.text }}
                    </button>
                </div>
            </div>


            <div class="mr-list col-md-2">
                <!-- Contenuto del blocco 3 -->
                <div>
                    <h2>{{ block3.title }}</h2>
                    <ul>
                        <li class="footer-list" v-for="item in block3.listItems" :key="item.text">
                            {{ item.text }}
                        </li>
                    </ul>
                </div>
            </div>


            <div class="col-md-2">
                <!-- Contenuto del blocco 4 -->
                <div>
                    <h2>{{ block4.title }}</h2>
                    <ul>
                        <li class="footer-list" v-for="item in block4.listItems" :key="item.text">
                            {{ item.text }}
                        </li>
                    </ul>
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
        imageSrc: {
            type: String,
            required: true
        }
    }
};
</script>

<style lang="scss" scoped>
button {
    background-color: white;
    color: grey;
    padding: 15px 40px;
    border-radius: 999px;
    border: none;
    margin: 10px;
    text-align: center;
}

.footer-list {
    list-style: disc;
}

.footer-paragraph {
    width: 550px;
}

.mr-list {
    margin: 0 25px;
}

.mr-list-block {
    margin-right: 20px;
}

footer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-image: url("../assets/footer-bg-football.jpg");
    padding: 30px;
    line-height: 35px;
}
</style>