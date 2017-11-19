<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview.vue'
  import icons from './assets/icons'
  import store from './store/index'
  import './assets/ui.scss'

export default {
  name: 'app',
//  data: function () {  // 👈 注意空格
//           return {
//             text: '你好'
//           }
//       },
  store,
  components:{Topbar,ResumeEditor,ResumePreview},
  created(){
    document.body.insertAdjacentHTML('afterbegin', icons) //
  }

}
</script>

<style lang="scss">

</style>
