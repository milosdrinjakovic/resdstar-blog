<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest news about Crvena zvezda!</h1>
    </section>
    <PostList :posts="loadedPosts" />
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
  },
  middleware: 'log',
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts
    }
  }
  // data() {
  //   return {
  //     loadedPosts: []
  //   };
  // },
};
</script>


<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("https://wallpaperaccess.com/full/3302368.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 55%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: white;

  padding: 10px;
  border-radius: 10px;

  box-sizing: border-box;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
