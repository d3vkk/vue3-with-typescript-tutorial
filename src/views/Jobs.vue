<template>
  <div>
    <header>
      <div class="order">
        <button @click="orderBy('title')">order by title</button>
        <button @click="orderBy('location')">order by location</button>
        <button @click="orderBy('salary')">order by salary</button>
      </div>
    </header>
    <JobsList :jobs="jobs" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import JobsList from "../components/JobsList.vue";
import Job from "../types/Job";
import OrderTerm from "../types/OrderTerm";

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
    const order = ref<OrderTerm>("title");

    const orderBy = (term: OrderTerm) => {
      order.value = term;
    };

    return { jobs, orderBy, order };
  },
});
</script>

<style scoped>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
button {
  margin: 0 10px;
  color: #fffffe;
  border: 3px solid #8c7851;
  background: #8c7851;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
</style>
