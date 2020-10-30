<template>
  <div class="hello">
    <input v-model="newTodo" />
    <button @click="addTodo">create</button>
    <div
      v-for="(item, index) in arrayTodo"
      :key="index"
      v-bind:class="{ active: isActive, active2: isActive2 }"
    >
      <li>{{ item }}</li>
      <button @click="removeTodo(index)">x</button>
      <button @click="markTodo(index)">complete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      arrayTodo: [],
      newTodo: "",
      mark: null,
      isActive: false,
      isActive2: true
    };
  },
  methods: {
    addTodo() {
      this.arrayTodo.push(this.newTodo);
    },
    removeTodo(index) {
      this.arrayTodo.splice(index, 1);
    },
    markTodo(index) {
      this.mark = index;
      if (this.isActive === false && this.isActive2 === true) {
        this.isActive = true;
        this.isActive2 = false;
      } else {
        this.isActive = false;
        this.isActive2 = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.active > li {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}
/* ################################################################################## */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
