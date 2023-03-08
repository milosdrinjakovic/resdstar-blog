<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
  layout: 'admin',
  middleware: ['check-auth','auth'],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios.get('https://nuxt-blog-8b6c2-default-rtdb.europe-west1.firebasedatabase.app/posts/' + context.params.postId + '.json') //primer za upotrebu axios kroz module'
      //ne moramo ucitavati na svakoj strani i imamo baseURL za url
      .then(res => {
        return {
          loadedPost: {...res.data,id: context.params.postId}
        }
      })
      .catch(e => context.error(e))
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store.dispatch('editPost',editedPost)
      .then(() => this.$router.push('/admin'))
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
