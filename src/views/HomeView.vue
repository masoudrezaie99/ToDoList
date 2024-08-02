<template>
  <v-card height="100%" min-width="120px" color="blue-grey-lighten-4">
    <v-fab
      color="success"
      icon="mdi-pencil"
      class="mr-2 mb-2"
      location="bottom end"
      size="64"
      absolute
      app
      appear
      extended
      text="Extended"
      @click="overlay = !overlay"
    ></v-fab>

    <v-card v-for="item in tasks" :key="item.title" :title="item.title" :subtitle="item.time" :text="item.description">
      <v-card-actions>
        <v-btn>done</v-btn>
      </v-card-actions>
    </v-card>

    
  </v-card>



  <v-overlay v-model="overlay" class="align-center justify-center">

    <v-card class="mx-auto px-6 py-8" min-width="344">
      
        <v-text-field
          v-model="task"
          class="mb-2"
          label="Task title"
          clearable
          prepend-icon="mdi-pencil"
        ></v-text-field>


        <v-text-field
          v-model="taskDes"
          class="mb-2"
          label="Task description"
          clearable
          prepend-icon="mdi-pencil"
        ></v-text-field>

        

        
      <v-date-input 
      clearable 
      label="Task Date"
      v-model="taskDate"
      
      ></v-date-input>



 




        <v-text-field
          v-model="taskTime"
          :active="timeModal"
          :focused="timeModal"
          label="Picker in dialog"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
        >
          <v-dialog
            v-model="timeModal"
            activator="parent"
            width="auto"
          >
            <v-time-picker
              v-if="timeModal"
              v-model="taskTime"
              format="24hr"
            ></v-time-picker>
          </v-dialog>
        </v-text-field>
    
       

  

        <br>

        <v-btn
          :disabled="!disableBtn"
          
          color="success"
          size="large"
          type="submit"
          variant="elevated"
          block
          @click="addTask"
        >
          Add Task
        </v-btn>
        
    </v-card>
    
    </v-overlay>
</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';



export default{
  setup(){
    const taskStore = useTaskStore()
    const {overlay , task , tasks , taskDes , taskDate , timeModal, taskTime,disableBtn} = storeToRefs(taskStore)
    taskStore.updateTasks()
   
    const addTask = ()=>{
      taskStore.addTask()
  }

  window.addEventListener("storage", (event) => {
        if (event.key === "ToDoTasks") {
          taskStore.updateTasks()
        }
        
      });


    return{overlay , task , tasks , taskDes , taskDate , timeModal, taskTime, addTask,disableBtn}

  },

 
}

</script>


<style>



</style>
