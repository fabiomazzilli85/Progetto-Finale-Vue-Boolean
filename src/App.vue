<template>
  <div>
    <PageHeader :navLinks="navLinks" :imageHeaders="imageHeaders" />
    <MainPage />
    <PageFooter :block1="block1" :block2="block2" :block3="block3" :block4="block4" />
  </div>
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import MainPage from './components/MainPage.vue';
import PageFooter from './components/PageFooter.vue';



export default {
  components: {
    PageHeader,
    MainPage,
    PageFooter
  },

  data() {
    return {
      navLinks: [
        { text: 'Home', url: '#' },
        { text: 'Fixtures & Results', url: '#' },
        { text: 'League Table', url: '#' },
        { text: 'Players', url: '#' },
        { text: 'Gallery', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Contact', url: '#' }
      ],

      block1: "Contenuto blocco 1",
      block2: "Contenuto blocco 2",
      block3: "Contenuto blocco 3",
      block4: "Contenuto blocco 4",
      // imageHeaders: [
      //   "../assets/sponsor1.png",
      //   "../assets/sponsor2.png",
      //   "../assets/logo-football.png"
      // ]
    };
  }
};
</script>

<style lang="scss">
@use './style/general';
</style>
