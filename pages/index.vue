<template>
  <div>
    <h1>test</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socket: null
    }
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      channel: '/index'
    })
  }
}
</script>
