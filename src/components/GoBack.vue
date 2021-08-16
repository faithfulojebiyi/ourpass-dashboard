<template>
  <button class="flex d-inline-flex" @click="goBack">
    <v-icon class="ml-n3 mr-2" size="40px" color="primary">mdi-chevron-left</v-icon>
    <p class="d-sr-only">go back</p>
  </button>
</template>

<script>
export default {
  name: 'GoBack',
  methods: {
    goBack () {
      return this.$router.go(-1)
    }
  }
}
</script>

<style scoped>

</style>
