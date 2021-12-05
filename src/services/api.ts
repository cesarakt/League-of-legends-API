import axios from 'axios'

export const apiChampions = axios.create({
  baseURL: 'http://ddragon.leagueoflegends.com/cdn/'
})

export const apiVersion = axios.create({
  baseURL: 'https://ddragon.leagueoflegends.com/api/versions.json'
})
