<template>
  <v-card height="100%" min-width="120px" color="blue-grey-lighten-4">


    <listItemCp/>

    
  </v-card>



</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';
import listItemCp from '../components/listItem-cp.vue';



export default{
  setup(){
    const taskStore = useTaskStore()
    const {overlay} = storeToRefs(taskStore)
   
  
 

  


    return{overlay}

  },


  components:{
    listItemCp,
  }

 
}

</script>


<style>



</style>
