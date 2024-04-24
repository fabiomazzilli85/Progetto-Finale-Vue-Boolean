<template>
  <div>
    <PageHeader :navLinks="navLinks" />
    <MainPage />
    <UpcomingMatches />
    <CardPlayer />
    <TableResults />
    <RecentNews />
    <PageFooter :block1="block1" :block2="block2" :block3="block3" :block4="block4" />
  </div>
  <!-- 
  Inseriti in template quattro componenti: PageHeader, MainPage, CardPlayer e PageFooter. In PageHeader e in PageFooter utilizzano le props. -->
</template>

<script>
import PageHeader from './components/PageHeader.vue';
import MainPage from './components/MainPage.vue';
import UpcomingMatches from './components/UpcomingMatches.vue';
import CardPlayer from './components/CardPlayer.vue';
import TableResults from './components/TableResults.vue';
import RecentNews from './components/RecentNews.vue';
import PageFooter from './components/PageFooter.vue';



export default {
  components: {
    PageHeader,
    MainPage,
    CardPlayer,
    UpcomingMatches,
    TableResults,
    RecentNews,
    PageFooter
  },

  data() {
    return {
      // Ho usato la props per restituire img da App.vue a PageFooter, purtroppo non ha funzionato e non visualizzo l'immagine.

      navLinks: [
        { text: 'Home', url: '#' },
        { text: 'Fixtures & Results', url: '#' },
        { text: 'League Table', url: '#' },
        { text: 'Players', url: '#' },
        { text: 'Gallery', url: '#' },
        { text: 'Blog', url: '#' },
        { text: 'Contact', url: '#' }
      ],

      // Sto passando un testo e una url vuota, che poi saranno ripresi in PageHeader tramite props.

      block1: {
        imageSrc: "./assets/logo-footer-football.png",
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
          { text: "Fixtures & Results", url: "#" },
          { text: "Legal Table", url: "#" },
          { text: "Player", url: "#" },
          { text: "Galery", url: "#" }
        ]
      },

      block4: {
        title: "Quick Links",
        listItems: [
          { text: "Home", url: "#" },
          { text: "Blog", url: "#" },
          { text: "Gallery", url: "#" },
          { text: "Contact", url: "#" }
        ]
      },
    };
  }
};
</script>

<style lang="scss">
@use './style/general';
</style>
