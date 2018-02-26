<template>
  <div>
    <div class=page v-bind:class="{previewMode:previewMode}">
      <header>
        <Topbar class="Topbar" @preview="preview"/>
      </header>
      <main>
        <ResumeEditor  class="ResumeEditor"/>
        <ResumePreview  class="Resumepreview"/>
      </main>
      <el-button id="exit-btn" type="primary" size="medium" @click="exitpreview">退出预览</el-button>
    </div>

  </div>
</template>

<script>
  import 'normalize.css/normalize.css'
  import './assets/reset.css'
  import Topbar from './components/Topbar'
  import ResumeEditor from './components/ResumeEditor'
  import ResumePreview from './components/ResumePreview'
  import icons from './assets/icons'
  import store from './store/index'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'
  import Vue from 'vue'
  import Element from 'element-ui'
  Vue.use(Element, { size: 'small' })
  export default {
    name: 'app',
    store,
    components: { Topbar, ResumeEditor, ResumePreview},
    data() {
      return {previewMode:false};
    },
    methods:{
         preview(){this.previewMode=true
         },
         exitpreview(){this.previewMode=false
        }
    },
    created() {
      document.body.insertAdjacentHTML('afterbegin', icons) //
//      let state = localStorage.getItem('state')
//      if(state){
//        state = JSON.parse(state)
//      }
      let state=this.$store.state;
      this.$store.commit('initState', state);
      this.$store.commit('setUser', getAVUser());

    }
  }
</script>

<style lang="scss">
  .page{
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  >main{
     flex-grow: 1;
     min-width: 1024px;
     max-width: 1440px;
     margin-top: 16px;
     margin-bottom: 16px;
     display: flex;
     justify-content: space-between;
     padding: 0 16px;
     width: 100%; /* 试试不加这句会怎样 */
     align-self: center;
   }
  #resumeEditor{
    min-width: 35%;
  }
  #resumePreview{
    flex-grow: 1;
    margin-left: 16px;
  }
  svg.icon{
    height: 1em;
    width: 1em;
    fill: currentColor;
    vertical-align: -0.1em;
    font-size:16px;
  }
  #exit-btn{
    display: none;
  }
  }
  .previewMode{
    height: 100%;
  }
  .previewMode #topbar{
    display: none;
  }
  .previewMode #resumeEditor{
    display: none;
  }
  .previewMode #resumePreview{
    max-width: 960px;
    margin: 30px auto;
    height:100%;
  }

  .previewMode #exit-btn{
    display: block;
    position: fixed;
    bottom: 45px;
    right: 45px;
  }
</style>
