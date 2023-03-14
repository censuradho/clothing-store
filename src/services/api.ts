import { environments } from '@/constants/environments'
import axios from 'axios'

export const api = axios.create({
  baseURL: `${environments.siteUrl}/api`
})