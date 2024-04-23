<template>
    <footer class="container">
        <div class="row">
            <div class="col-md-2">
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
                <p>{{ block2.paragraph }}</p>
                <div>
                    <button v-for="(button, index) in block2.buttons" :key="index">
                        {{ button.text }}
                    </button>
                </div>
            </div>


            <div class="col-md-2">
                <!-- Contenuto del blocco 3 -->
                <div>
                    <h2>{{ block3.title }}</h2>
                    <ul>
                        <li v-for="item in block3.listItems" :key="item.text">
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
                        <li v-for="item in block4.listItems" :key="item.text">
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
    },
};
</script>

<style lang="scss" scoped>
footer {
    background-color: black;
}
</style>