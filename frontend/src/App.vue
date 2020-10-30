<template>
  <v-app>
    <v-app-bar
      app
      color="#B82E6A"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Ofrenda CSS Logo"
          class="shrink mr-2"
          contain
          src="../../frontend/src/assets/logo.svg"
          transition="scale-transition"
          width="40"
        />
        <h1>Ofrenda CSS</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/calypsobronte/"
        target="_blank"
        text
      >
        <span class="mr-2">calypsobronte</span>
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn
        href="https://leonidasesteban.com/cursos/javascript-react"
        target="_blank"
        text
      >
        <span class="mr-2">mira el curso de Leonidas Esteban</span>
        <v-icon>mdi-account-star</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main class="back"> 
      <OfrendaCSS/>
    </v-main>

    <v-footer
      dark
      padless
    >
      <v-card-text class="py-2 white--text text-center">
        <v-icon color="red">mdi-heart</v-icon>
        {{ new Date().getFullYear() }} — 
        <span>calypsobronte</span>
      </v-card-text>
  </v-footer>

  </v-app>
</template>

<script>
import OfrendaCSS from './views/OfrendaCSS';

export default {
  name: 'App',

  components: {
    OfrendaCSS,
  },
  

  data: () => ({
    //
  }),
};
</script>
