<script setup>
import { ref } from 'vue';
import { Meteor } from 'meteor/meteor';
import { subscribe, autorun } from 'vue-meteor-tracker';
const newTask = ref('');

const addTask = async () => {

    if (!newTask.value.trim()) return;
    
    try {
        await Meteor.callAsync('insertTask', newTask.value.trim());
        newTask.value = '';

        // Force a UI update
        subscribe('tasks');  // Re-subscribe after adding
    } catch (error) {
        console.error('Error inserting task:', error);
    }
};

</script>

<template>
    <form @submit.prevent="addTask">
        <input
            v-model="newTask"
            class=" border border-gray-300 rounded-md py-2 px-4 mr-2 text-gray-600 text-sm focus:outline-none focus:border-gray-400 focus:ring-0"
            type="text" placeholder="Type to add new tasks" />
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" type="submit">Add Task</button>
    </form>
</template>