<script>
  export default {
    onLaunch: function () {
      console.log('App Launch');
    },
    mounted() {
      console.log('App Mount');
    },
    onShow: function () {
      console.log('App Show');
    },
    onHide: function () {
      console.log('App Hide');
    }
  };
</script>

<style>
  /* #ifndef APP-NVUE */
  view {
    box-sizing: border-box;
  }
  /* #endif */
</style>
