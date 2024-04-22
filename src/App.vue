<template>
  <PageHeader :navLinks="navLinks" />
  <MainPage />
  <PageFooter />
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
        { text: 'Contact', url: '#' },
      ],
    }
  }
}
</script>

<style lang="scss">
@use './style/general';
</style>