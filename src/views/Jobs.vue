<template>
  <div>
    <JobsList :jobs="jobs"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JobsList from "../components/JobsList.vue";
import Job from "../types/Job";

export default defineComponent({
    components: {
    JobsList,
  },
  setup() {
    const jobs = ref<Job[]>([
      {
        title: "farm worker",
        location: "lon lon ranch",
        salary: 30000,
        id: "1",
      },
      {
        title: "quarryman",
        location: "macigmuw",
        salary: 40000,
        id: "2",
      },
      {
        title: "flute player",
        location: "padkemapi",
        salary: 25000,
        id: "3",
      },
      {
        title: "fisherman",
        location: "gaiteahe",
        salary: 21000,
        id: "4",
      },
      {
        title: "prison guard",
        location: "wawmuvzag",
        salary: 32000,
        id: "5",
      },
    ]);
    return { jobs };
  },
});
</script>

<style scoped></style>
