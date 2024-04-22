<template>
  <PageHeader />
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
    PageFooter,
  }
}
</script>

<style lang="scss">
@use './style/general';
</style>