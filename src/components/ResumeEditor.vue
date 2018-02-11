<template>
  <div id="resumeEditor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config" :class="{active: item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panels">
      <li v-for="item in resume.config" v-show="item.field === selected">
        <div v-if="resume[item.field] instanceof Array">
          <h2>{{$t(`resume.${item.field}._`)}}</h2>
          <div class="subitem" v-for="(subitem, i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label> {{$t(`resume.${item.field}.${key}`)}}</label>
              <input type="text" :value="value" @input="changeResumeField(`${item.field}.${i}.${key}`, $event.target.value)">
            </div>
            <i v-show='resume[item.field].length>1' class="el-icon-circle-close-outline" @click="removeResumeSubfield(item.field, i)">删除</i>
            <hr />
         </div>
         <button @click="addResumeSubfield(item.field)">新增</button>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label> {{$t(`resume.profile.${key}`)}} </label>
          <input type="text" :value="value" @input="changeResumeField(`${item.field}.${key}`, $event.target.value)">
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    name: 'ResumeEditor',
    computed: {
      selected:{
        get(){
          return this.$store.state.selected
        },
        set(value){
          return this.$store.commit('switchTab', value)
        }
      },
      resume (){
        return this.$store.state.resume
      }
    },
    methods: {
      changeResumeField(path, value){
        this.$store.commit('updateResume',{
          path,
          value
        })
      },
      addResumeSubfield(path){
          this.$store.commit('addSubfield',path)
      },
      removeResumeSubfield(path, i){
        this.$store.commit('removeSubfield',{path,i})
      }
    }
  }
</script>

<style lang="scss" >
  #resumeEditor{
    background:#ffffff;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    flex-direction: row;
    overflow: auto;
  > nav{
      width: 80px;
      background: black;
      color: white;
  > ol {
  > li{
      height: 48px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 16px;
      margin-bottom: 16px;
      color: white;
  &.active{
     background: white;
     color: black;
   }
  }
  }
  }
  > .panels{
      flex-grow: 1;
  > li {
      padding: 24px;
    >div{
    >h2{
    margin-bottom: 2em;
     }
     }
    }
  }
  svg.icon{
    width: 24px; // 原设计稿 32px 不好看，改成 24px
  height: 24px;
  }
  }
  ol{
    list-style: none;
  }
  .resumeField{
  > label{
      display: block;
    }
  input[type=text]{
    margin: 16px 0;
    border: 1px solid #ddd;
    box-shadow:inset 0 1px 3px 0 rgba(0,0,0,0.25);
    width: 100%;
    height: 40px;
    padding: 0 8px;
  }
  }
  /*i{*/
    /*margin-left:300px;*/
  /*}*/
  hr{
    border: none;
    border-top: 1px solid #ddd;
    margin: 12px 0;
  }

</style>
