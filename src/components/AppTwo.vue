<template>
  <div class="app">
    <h1>COMPOSITION API</h1>
    <p>{{ name }} is {{ age }} years old</p>
    <button @click="changeName('Hue')">Change Name</button>
    <button @click="changeAge('88')">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from "vue";

export default defineComponent({
  setup() {
    // WITH REACTIVE
    // const state = reactive({
    //   name: "George",
    //   age: 67 as number | string,
    // });

    // return { ...toRefs(state) };

    // WITH REFS
    const name = ref("George");
    // Generics are used in refs instead of Type Assertion
    const age = ref<number | string>(67);

    // Parameter label has to be changed to distinguish it from global variable
    function changeName(nameInput: string) {
      name.value = nameInput;
    }

    function changeAge(ageInput: string) {
      age.value = ageInput;
    }

    return {
      name: name,
      age: age,
      changeName: changeName,
      changeAge: changeAge,
    };
  },
});
</script>

<style scoped>
</style>
