<template>
  <div>
    <ul>
      <li v-for="p of pages">
        <NuxtLink :to="p.path">
          {{ p.title }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
const pages = [
  { title: "Menu (Dropdown)", path: "/menu" },
  { title: "Listbox (Select)", path: "/listbox" },
  { title: "Combobox (Autocomplete)", path: "/combobox" },
  { title: "Switch (Toggle)", path: "/switch" },
  { title: "Disclosure", path: "/disclosure" },
  { title: "Dialog (Modal)", path: "/dialog" },
  { title: "Popover", path: "/popover" },
  { title: "Radio Group", path: "/radio" },
  { title: "Tabs", path: "/tabs" },
  { title: "Transition", path: "/transition" },
];
</script>
