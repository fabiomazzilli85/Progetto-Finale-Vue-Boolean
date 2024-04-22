<template>
    <div class="main-header">
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
</template>

<script>
export default {
    props: {
        navLinks: {
            type: Array,
            default: () => [],
        },
    },
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
}

a {
    color: white;
    text-decoration: none;
    text-transform: uppercase;
}
</style>
