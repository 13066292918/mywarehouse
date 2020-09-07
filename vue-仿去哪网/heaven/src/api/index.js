import axios from 'axios'

axios.interceptors.response.use(function (response){
  return response.data.data
})

export let getHome=()=>{
  return axios.get('/static/mork/index.json')
}

export let getCity=()=>{
  return axios.get('/static/mork/cityList.json')
}

export let getDetail=(id)=>{
  return axios.get('/static/mork/detail/'+id+'.json')
}
