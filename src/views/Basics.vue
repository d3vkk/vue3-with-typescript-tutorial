<template>
  <div>
    <OptionsAPI/>
    <hr>
    <CompositionAPI/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import OptionsAPI from "../components/OptionsAPI.vue";
import CompositionAPI from "../components/CompositionAPI.vue";

export default defineComponent({
  components: {
    OptionsAPI,
    CompositionAPI,
  },
});
</script>

<style scoped>
</style>
