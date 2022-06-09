<template>
  <div class="jobs-list">
    <p>Ordered by {{ order }}</p>
    <transition-group name="list" tag="ul">
      <li v-for="job in orderedJobs" :key="job.id">
        <h2>{{ job.title }} in {{ job.location }}</h2>
        <div class="salary">
          <p>{{ job.salary }} USD</p>
        </div>
        <div class="description">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            eligendi ex animi odit mollitia, cupiditate provident aliquam
            corrupti, iusto sequi ullam fugiat est ut qui at? Veniam alias velit
            laudantium.
          </p>
        </div>
      </li>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from "vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

export default defineComponent({
  props: {
    jobs: {
      type: Array as PropType<Job[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    // Ordered in ascending order
    const orderedJobs = computed(() => {
      return [...props.jobs].sort((a: Job, b: Job) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return { orderedJobs };
  },
});
</script>

<style scoped>
.jobs-list {
  max-width: 960px;
  margin: 40px auto;
}
.jobs-list ul {
  padding: 0;
}
.jobs-list li {
  list-style-type: none;
  background: #eaddcf;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.jobs-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #f25042;
  font-weight: bold;
  margin: 10px 4px;
}
.list-move {
  transition: all 1s;
}
</style>
