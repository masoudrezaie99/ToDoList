<template>
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
</template>

<script>
import { useTaskStore } from '../stores/store';
import { storeToRefs } from 'pinia';



export default{
    name:'addItem-cp',
    
  setup(){
    const taskStore = useTaskStore()
    const {task , tasks , taskDes , taskDate , timeModal, taskTime,disableBtn} = storeToRefs(taskStore)
   
    const addTask = ()=>{
      taskStore.addTask()
  }

  


    return{task , tasks , taskDes , taskDate , timeModal, taskTime, addTask,disableBtn}

  },


 

 
}

</script>

<style scoped>

</style>