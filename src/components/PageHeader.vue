<template>
    <div class="container">
        <div class="main-header">
            <div class="sponsor-logos">
                <img class="sponsor" src="../assets/sponsor1.png">
                <img src="../assets/logo-football.png">
                <img class="sponsor" src="../assets/sponsor2.png">
                <!-- <font-awesome-icon :icon="['fab', 'facebook-f']" /> -->
                <!-- <img v-for="(image, index) in imageHeaders" :src="image" :key="index" class="sponsor-logo" /> -->
            </div>
            <div class="navLinks">
                <nav>
                    <ul>
                        <li v-for="(link, index) in navLinks" :key="index">
                            <a :href="link.url">{{ link.text }}</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
// import FontAwesomeIcon from '../main.js'

export default {
    //   components: {
    //     FontAwesomeIcon
    //   },

    props: {
        navLinks: {
            type: Array,
            required: true
        },
        // imageHeaders: {
        //     type: Array,
        //     required: true
        // }
    }
};
</script>

<style lang="scss" scoped>
.main-header {
    background-color: rgba(0, 0, 0, 0.8);
    padding: 10px 20px;
    width: 100%;
}

ul {
    display: flex;
    justify-content: space-around;
    margin: 25px 0;
}

a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
}

.sponsor-logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
}

.sponsor {
    height: 50px;
    display: block;
}
</style>
