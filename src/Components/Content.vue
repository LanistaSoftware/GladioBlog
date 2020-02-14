<template>
  <section>

    <Blogs></Blogs>

  </section>
</template>

<script>
import Blogs from './ContentComponents/Blogs'
export default {
  components:{
    Blogs
  },

  name: 'Content',
  data() {
    return {
      msg: 'Lanista Gladio Blog Content'
    }
  }
}

</script>
