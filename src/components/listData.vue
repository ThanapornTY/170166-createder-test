<script>
/*
export default{
  data(){
    return{
      firstName: "ธนพร",
      lastname: "ใหญ่โสมานัง"
    }
  }
  
}*/

import axios from 'axios'

export default {
  data() {
    return {
      posts: []
    }
  },
  mounted() {
   axios.get('https://jsonplaceholder.typicode.com/posts')
   .then(response => this.posts = response.data)
  }
}

</script>

<template>
  <div class="card" v-for="post in posts" :key="post.id">
    <div class="container">
      <router-link :to="{name: 'view', params:{id: post.id}}">{{ post.id }} {{ post.title }}</router-link>
      <!--<h2 :to="{name: 'view', params:{id: post.id}}">{{ post.id }} {{ post.title }}</h2>-->
    </div>
  </div>
</template>

<style scoped>
.card {
  box-shadow: 0 2px 4px 0 rgba(143, 192, 255, 0.504);
  transition: 0.3s;
  width: 100%;
  display: flex;
  padding: 10px;
  margin: 20px;

}

.card:hover {
  box-shadow: 0 8px 10px 0 rgba(128, 173, 232, 0.504);
}

.container {
  padding: 2px 16px;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
