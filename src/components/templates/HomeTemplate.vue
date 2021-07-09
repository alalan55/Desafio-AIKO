<template>
  <div class="home-template-container">
    <Header class="header" />
    <div class="cards__home">
      <ContainerLista class="container__lista">
        <template v-slot:search>
          <SearchBar :text="text" v-model="search" />
        </template>

        <div class="teste">
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <!-- <ListItem class="items"/>
                      <ListItem class="items"/> -->
      </ContainerLista>
      <!-- <GoogleMap :init="initializeGoogleMap" class="mapa"></GoogleMap> -->
      <div
        ref="mapDiv"
        style="width: 100%; height: 100%; border-radius: 5px"
      ></div>

      <Block class="block" />
    </div>
  </div>
</template>

<script>
import {Loader} from '@googlemaps/js-api-loader'
import { Header, Block } from "@/components/organisms";
import { ListItem, SearchBar } from "@/components/atoms";
import { ContainerLista } from "@/components/bosons";
//import {SearchBar} from '@/components/atoms'

export default {
  components: {
    Header,
    ContainerLista,
    ListItem,
    SearchBar,
    Block,
  },
  data() {
    return {
      text: "Pesquise..",
      search: "",
      center: { lat: -23.4832276, lng: -46.7656679 },
      mapContainer: this.$refs.mapDiv,
      map: null,
      google: null,
    };
  },
//   computed: {
//     initializeGoogleMap() {
//       let obj = {
//         streetViewControl: true,
//         scaleControl: true,
//         center: this.center,
//         zoom: 8,
//       };
//       return obj;
//     },
//   },
  async mounted() {
    const loader = new Loader({ apiKey: process.env.VUE_APP_G_KEY });
    let value = await loader.load();
    this.google = value;
    let map = new this.google.maps.Map(this.$refs.mapDiv, {
      center: this.center,
      zoom: 10,
    });

    new this.google.maps.Marker({
      position: this.center,
      map,
      title: "Alan de Oliveira Ferreira",
    });
  },
};
</script>

<style lang="scss" scoped>
.home-template-container {
  //  border: 1px solid red;
  height: 100vh;

  header {
    //  border: 1px solid red;
  }

  .cards__home {
    //  border: 1px solid red;
    padding: 1rem;
    height: calc(100vh - 60px);
    display: flex;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
    grid-template-areas:
      "list mapa"
      "block block";

    .container__lista {
      grid-area: list;
      border: 1px solid;
      height: 100%;
    }
    .mapa {
      grid-area: mapa;
      border: 1px solid;
    }
    .block {
      grid-area: block;
      border: 1px solid;
    }
  }

  .teste {
    border: 1px solid red;
    overflow-y: scroll;
    height: 50vh;
  }
}
</style>