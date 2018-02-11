import Vuex from 'vuex'
import Vue from 'vue' // 思考：在多个文件 import vue ，会怎样
import objectPath from "object-path"


Vue.use(Vuex) // 不写这句话浏览器控制台就会报错，于是我就写了

export default new Vuex.Store({
  state: {
    selected: 'profile',
    user: {
      id: '',
      username: ''
    },
    resume: {
      config: [
        { field: 'profile', icon: 'id' },
        { field: 'workHistory', icon: 'work' },
        { field: 'education', icon: 'book' },
        { field: 'projects', icon: 'heart' },
        { field: 'awards', icon: 'cup' },
        { field: 'contacts', icon: 'phone' },
      ],
      profile: {
        name: '',
        city: '',
        title: '',
        birthday: ''
      },
      workHistory: [
        {
          company: '', details: ''
        }
      ],
      education: [
        { school: '', details: '' }
      ],
      projects: [
        { name: '', details: '' }
      ],
      awards: [
        { name: '', details: '' }
      ],
      contacts: [
        { contact: '', details: '' },
      ],
    }
  },
  mutations: {
    initState(state, payload){
      Object.assign(state, payload)
    },
    switchTab(state, payload) {
      state.selected = payload // 关于 payload 看这里 http://vuex.vuejs.org/zh-cn/mutations.html#提交载荷（payload）
      localStorage.setItem('state', JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state', JSON.stringify(state))
      console.log(state)
    },
    setUser(state, payload){
      Object.assign(state.user, payload)
    },
    removeUser(state){
      state.user.id = ''
    },
    addSubfield(state, playload){
      let obj1 = {};
      Object.keys(state.resume[playload][0]).forEach(function (key) {
        obj1[key] = '';
      });
      state.resume[playload].push(obj1)

    },
    removeSubfield(state, {path,i}){
      state.resume[path].splice(i,1)
    }
  }
})
