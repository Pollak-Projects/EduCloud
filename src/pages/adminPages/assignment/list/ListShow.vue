<template>
  <div v-if="selectedItem" class="mt-6">
    <h2 class="text-xl font-bold">Modul tartalma</h2>

    <!-- Table displaying the selected item's properties -->
    <div class="rounded-md bg-gray-800">

      <table class="min-w-[30dvw] border-black border-solid text-center">
        <thead>
        <tr>
          <th class="px-4 ">Név</th>
          <th class="px-4 border-black">File</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in selectedItem.items" :key="index" class="odd:bg-gray-500 even:bg-gray-600">
          <td>
            {{ item.name }}
          </td>
          <td>
            <button><!-- Handle File opening -->
            {{ item.fileName }}
            </button>
          </td>
        </tr>
        </tbody>
      </table>

    </div>
    <div class="flex justify-center">
      <p class="text-gray-200">A megnyitáshoz kattintsno a fálj nevére.</p>
    </div>
  </div>
  <div v-else>
    <p class="text-gray-200">Kattintson az egyik modulra a továbbiakhoz.</p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

// Define the prop the child will receive
const props = defineProps({
  selectedItem: Object,
});
</script>