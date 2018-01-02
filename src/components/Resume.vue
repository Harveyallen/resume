<template>
  <div>
    <div class=page>
      <header>
        <Topbar/>
      </header>
      <main>
        <ResumeEditor/>
        <ResumePreview/>
      </main>
    </div>
  </div>
</template>

<script>
  import Topbar from './Topbar'
  import ResumeEditor from './ResumeEditor'
  import ResumePreview from './ResumePreview'
  export default {
    name: 'Resume',
    components: { Topbar, ResumeEditor, ResumePreview },
    created() {
      let state = localStorage.getItem('state')
      if(state){
        state = JSON.parse(state)
      }
      this.$store.commit('initState', state)
    }
  }
</script>

<style lang="scss" scoped>
  #resumeEditor {
    min-width: 35%;
    background: #444;
  }
  #resumePreview {
    flex-grow: 1;
    margin-left: 16px;
  }
</style>
