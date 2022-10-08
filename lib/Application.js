import axios from "axios";

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
        Authorization: `Bearer ${token}`,
        contentType: 'application/json'
      }
    })
    return data.data
  }
}
