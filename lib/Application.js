import axios from "axios";
import {ROUTE_ALL_PRODUCT} from "../utils/Constante";
import * as url from "url";

export const Application={

  auth:async () => {
    const {data} = await axios.post(process.env.API_BASE+'/auth/local', {
      "identifier": process.env.CLIENT_ID,
      "password": process.env.SECRET_KEY
    });
    return data.jwt
  },
  getData:async ({token,url})=>{
    const {data}=await axios.get(process.env.API_BASE+url,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return data.data
  }
}
