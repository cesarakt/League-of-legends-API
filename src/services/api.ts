import axios from 'axios'

export const apiChampions = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/11.23.1/data'
})
