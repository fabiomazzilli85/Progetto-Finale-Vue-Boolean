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

      block1: {
        imageSrc: "../assets/logo-footer-football.png",
        listItems: [
          { text: "New Jersey, USA" },
          { text: "+12345678910" },
          { text: "example@example.it" }
        ]
      },

      block2: {
        title: "Join Our Newsletter",
        paragraph: "Subscribe to be informed about important developments in our club and football world.",
        buttons: [
          { text: "Your Email Addreess", url: "#" },
          { text: "Subscribe", url: "#" }
        ]
      },

      block3: {
        title: "Education",
        listItems: [
          { text: "Fixtures & Results" },
          { text: "Legal Table" },
          { text: "Player" },
          { text: "Galery" }
        ]
      },

      block4: {
        title: "Quick Links",
        listItems: [
          { text: "Home" },
          { text: "Blog" },
          { text: "Gallery" },
          { text: "Contact" }
        ]
      },
    };
  }
};

      // imageHeaders: [
      //   "../assets/sponsor1.png",
      //   "../assets/sponsor2.png",
      //   "../assets/logo-football.png"
      // ]
</script>

<style lang="scss">
@use './style/general';
</style>
