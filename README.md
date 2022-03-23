# Headlessui/vue & Nuxt3

disucssion:

- https://github.com/nuxt/framework/discussions/3789

## setup

```sh
git clone https://github.com/ilanc/nuxt3-headlessui-vue.git
cd nuxt3-headlessui-vue
yarn
yarn dev
```

## TODO

- [] fix page reload error with http://localhost:3000/dialog

## page reload error with Dialog

overview

- [dialog](https://headlessui.dev/vue/dialog) renders correctly when you `<NuxtLink to="dialog">`
- however it crashes inside nitro when you do a page reload on the dialog page with this error: `document is not defined`
- all other `@headlessui/vue` components seem to work correctly (on nuxtlink or page-reload)

steps to reproduce

```sh
yarn dev &
xdg-open http://localhost:3000/dialog
```

result = `document is not defined`

```log
[Vue warn]: Unhandled error during execution of watcher callback 
  at <Dialog as="div" onClose=fn<closeModal> ref=Ref< null > >

 ERROR  [worker] document is not defined                                                                                                                                                                                                                                  13:21:54

  at .nuxt/dist/server/server.mjs:3099:3131
  at callWithErrorHandling (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:157:22)
  at callWithAsyncErrorHandling (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:166:21)
  at getter (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:1717:24)
  at doWatch (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:1741:13)
  at Module.watchEffect (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:1637:12)
  at setup (.nuxt/dist/server/server.mjs:3099:3087)
  at callWithErrorHandling (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:157:22)
  at setupStatefulComponent (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6977:29)
  at setupComponent (node_modules/@vue/runtime-core/dist/runtime-core.cjs.js:6933:11)


 ERROR  [proxy] connect ENOENT /tmp/nitro/worker-9459-1.sock                                                                                                                                                                                                              13:21:54

  at PipeConnectWrap.afterConnect [as oncomplete] (node:net:1157:16)
```

## error

- only if page-reload & dialog open on start
- error inside @headlessui/vue
  - https://github.com/tailwindlabs/headlessui/pull/1158
  - /code/web/tailwind/headlessui/packages/@headlessui-vue/src/components/dialog/dialog.ts
  - /code/web/tailwind/headlessui/packages/@headlessui-vue/src/components/portal/portal.ts
  - dialog and portal using owner
- notes
  - /code/web/tailwind/headlessui/packages/@headlessui-vue/dist/headlessui.esm.js
  - built into server.mjs
    - /code/web/nuxt/8-headlessui-vue/.nuxt/dist/server/server.mjs

## build custom @headlessui/vue

```sh
# link
/code/web/nuxt/8-headlessui-vue
mv node_modules/@headlessui/vue node_modules/@headlessui/vue2
ln -s /code/web/tailwind/headlessui/packages/@headlessui-vue node_modules/@headlessui/vue

# build prod (minified)
pushd /code/web/tailwind/headlessui/packages/@headlessui-vue && yarn build && popd

# or build non-minified
pushd /code/web/tailwind/headlessui/packages/@headlessui-vue && ../../node_modules/.bin/esbuild ./src/index.ts --format=esm --outfile=./dist/headlessui.esm.js --sourcemap --bundle --platform=browser --target=es2020 --external:vue && popd

# and fix non-minified = manually remove vue duplicates:
code /code/web/nuxt/8-headlessui-vue/node_modules/@headlessui/vue/dist/headlessui.esm.js
# rm from "vue" imports:
# - inject, provide
# - ref, onMounted, watchEffect
# - defineComponent
# - unref
```

## solution

- only open dialog in `onMounted()`

```ts
// const isOpen = ref(true);
const isOpen = ref(false);

onMounted(() => {
  isOpen.value = true;
});
```