import axios from "axios"
import { getCookie } from "cookies-next"
import type { AxiosRequestConfig } from "axios"

axios.interceptors.request.use((config: AxiosRequestConfig) => {})
