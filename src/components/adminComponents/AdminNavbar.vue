<script setup lang="ts">
import {inject, ref} from "vue";

const showModulesDropdown = ref(false);
const showAssignmentsDropdown = ref(false);
const showUsersDropdown = ref(false);

const model = defineModel()

console.log(model.value)
</script>

<template>

  <section>
    <div class="flex flex-col border-t-[1px] border-t-[--border-color] text-[--text-color] sm:text-xl md:text-1xl
                ">
      <!-- Modules Dropdown -->
      <div class="ml-1">
        <div class="py-2 mt-2">
          <button
              @click="showModulesDropdown = !showModulesDropdown"
              class="w-full px-4 text-left underline flex items-center"
          >
            Modulok
          </button>
          <div
              v-if="showModulesDropdown"
              class=""
          >
            <ul class="list-disc list-inside">
              <!--add another RouterLink to add new path-->
              <RouterLink
                  to="/admin/module-create"
                  class="block px-4 text-lg"

              >
                <li>Létrehozás</li>
              </RouterLink>
              <RouterLink
                  to="/admin/module-list"
                  class="block px-4 text-lg"

              >
                <li>Listázás</li>
              </RouterLink>
              <RouterLink
                  to="/admin/module-category-create"
                  class="block px-4 text-lg"
              >
                <li>Kategória létrehozása</li>
              </RouterLink>
            </ul>
          </div>
        </div>

        <!-- Assignments Dropdown -->
        <div class="py-2">
          <button
              @click="showAssignmentsDropdown = !showAssignmentsDropdown"
              class="w-full px-4 text-left underline flex items-center"
          >
            Feladatok
          </button>
          <div
              v-if="showAssignmentsDropdown"
              class=""
          >
            <ul class="list-disc list-inside">
            <RouterLink
                to="/admin/assignment-create"
                class="block px-4 text-lg"
            >
              <li>Létrehozás</li>
            </RouterLink>
            <RouterLink
                to="/admin/assignment-list"
                class="block px-4 text-lg"
            >
              <li>Listázás</li>
            </RouterLink>
            </ul>
          </div>
        </div>

        <!-- Users Dropdown -->
        <div class="py-2" >
          <button
              @click="showUsersDropdown = !showUsersDropdown"
              class="w-full px-4 text-left underline flex items-center"
          >
            Felhasználók
          </button>
          <div
              v-if="showUsersDropdown"
              class=""
          >
            <ul class="list-disc list-inside">
              <RouterLink
                  to="/admin/user-create"
                  class="block px-4 text-lg"
              >
                <li>Létrehozás</li>
              </RouterLink>
              <RouterLink
                  to="/admin/user-list"
                  class="block px-4 text-lg"
              >
                <li>Listázás</li>
              </RouterLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
