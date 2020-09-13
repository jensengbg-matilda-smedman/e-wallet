<template>
  <div class="top">
      <h1> {{ pageTitle }} </h1>
  </div>
</template>

<script>
export default {
  name: 'Top',
  props: {
    cardInfo: Object
  },
  computed: {
    pageTitle: function() {
        return this.$route.meta.title;
    }
  }
}
</script>

<style scoped lang="scss">
  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>