import axios from "axios"
import {baseURL} from '../config/api'

export const Api = axios.create({
  baseURL
});


