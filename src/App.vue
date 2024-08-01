<template>
  <v-app>
    <v-app-bar :elevation="2" color="blue-grey-darken-3" scroll-behavior="hide" scroll-threshold="268" >
      
    <v-app-bar-nav-icon></v-app-bar-nav-icon>


  <v-app-bar-title>To Do List</v-app-bar-title>
</v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer app color="blue-grey-darken-3">Front-End Developed By Masoud Rezaie</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
