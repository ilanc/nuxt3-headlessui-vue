<template>
  <div class="w-screen h-screen pt-12 flex flex-col items-center gap-4">
    <div class="w-56">
      <Menu as="div" class="relative inline-block text-left">
        <div>
          <MenuButton
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium bg-blue-600 hover:bg-blue-800 text-white bg-black rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-opacity-75"
          >
            Options
            <ChevronDownIcon
              class="w-5 h-5 ml-2 -mr-1 text-blue-200 hover:text-blue-100"
              aria-hidden="true"
            />
          </MenuButton>
        </div>

        <transition
          enter-active-class="transition duration-100 ease-out"
          enter-from-class="transform scale-95 opacity-0"
          enter-to-class="transform scale-100 opacity-100"
          leave-active-class="transition duration-75 ease-in"
          leave-from-class="transform scale-100 opacity-100"
          leave-to-class="transform scale-95 opacity-0"
        >
          <MenuItems
            class="absolute left-0 w-56 mt-2 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <EditIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-blue-400"
                    aria-hidden="true"
                  />
                  Edit
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <DuplicateIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-blue-400"
                    aria-hidden="true"
                  />
                  Duplicate
                </button>
              </MenuItem>
            </div>
            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <ArchiveIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-blue-400"
                    aria-hidden="true"
                  />
                  Archive
                </button>
              </MenuItem>
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <MoveIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-blue-400"
                    aria-hidden="true"
                  />
                  Move
                </button>
              </MenuItem>
            </div>

            <div class="px-1 py-1">
              <MenuItem v-slot="{ active }">
                <button
                  :class="[
                    active ? 'bg-blue-500 text-white' : 'text-gray-900',
                    'group flex rounded-md items-center w-full px-2 py-2 text-sm',
                  ]"
                >
                  <DeleteIcon
                    :active="active"
                    class="w-5 h-5 mr-2 text-blue-400"
                    aria-hidden="true"
                  />
                  Delete
                </button>
              </MenuItem>
            </div>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import {
  ChevronDownIcon,
  ArchiveIcon,
  DuplicateIcon,
  ArrowCircleRightIcon as MoveIcon,
  PencilIcon as EditIcon,
  TrashIcon as DeleteIcon,
} from "@heroicons/vue/solid";
</script>
