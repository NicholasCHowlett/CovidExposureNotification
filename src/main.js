import { createApp } from 'vue'
//import App from './App.vue'
import {getSites} from './helpers/index'

const app = createApp({
  data() {
    return { sites: null }
  },
  methods: {
    updateSitesData(data) {
      this.sites = data;
    },
    drawMap() {
      // draw map on webpage using either:
      // - https://github.com/diegoazh/gmap-vue
      // - https://github.com/xon52/x5-gmaps
    }
  },
  computed: {
    redrawMapData() {
      return false;
    }
  }
})

app.mount('#app');

// get exposure sites
async function getSitesPeriodically() {
  var expSites = await getSites();
  console.log(expSites);
}
getSitesPeriodically();

// TODO:
// - find any new exposure sites since last check
// - redraw map when any new exposure data 