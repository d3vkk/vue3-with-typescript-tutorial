<template>
  <div>
    <h1>OPTIONS API</h1>
    <p>{{ name }} is {{ age }} years old</p>
    <button @click="changeName('Hue')">Change Name</button>
    <button @click="changeAge('88')">Change Age</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      name: "George",
      // Unions are not allowed in the data property
      // Hence type assertions are used
      age: 67 as number | string,
    };
  },
  methods: {
    changeName(name: string) {
      this.name = name;
    },
    // As age has a double type, the parameter type can be either, or OR both
    // changeAge(age: number | string) {
    changeAge(age: string) {
      this.age = age;
    },
  },
});
</script>

<style scoped></style>
