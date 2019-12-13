<template>
  <div class="public-layout-container">

    <Aside></Aside>
    <Header></Header>
    <MainPage></MainPage>

  </div>
</template>

<script>
import Aside from 'components/common/layout/Aside'
import Header from 'components/common/layout/Header'
import MainPage from 'components/common/layout/MainPage'
export default {
  components: {
    Aside,
    Header,
    MainPage
  }
}
</script>

<style scoped lang="less">
  .mainPage-container {
    /*padding: 10px 10px 10px 220px;*/
  }
  .public-layout-container {
    position: relative;
    width: 100%;
  }
  
</style>