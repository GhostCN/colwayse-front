// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import {Application} from "../../lib/Application";

export default async function handler(req, res) {
  const {numero,prenom,nom,adresse,modePaiement}=req.body.data;
  const tokenResponse = await Application.auth()
  if(tokenResponse){
    const infoClient={
      numero:numero,
      prenom:prenom,
      nom:nom,
      adresse:adresse
    }
    const response=await fetch(process.env.API_BASE+'/clients',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tokenResponse}`
      },
      body: JSON.stringify({data:infoClient}),
    })
    if(response.status == 200){
      const datas=await response.json()
      const infoCommande = {product: req.body.shoes, client: datas.data.id,mode_de_paiement:modePaiement}
      const commandeResponse=await fetch(process.env.API_BASE+'/commandes',{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenResponse}`
        },
        body: JSON.stringify({data:infoCommande}),
      })
      return res.status(200).json(commandeResponse)
    }
   else return res.status(500).json(response.statusText)
  }
}
