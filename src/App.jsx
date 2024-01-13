import React from 'react'
import Card from './components/card'
function App() {
  let data = [
    {
      plan:"Free",
      price:0,
      user:"single user",
      isuser:true,
      storage:"5 GB",
      isstorage:true,
      publicProject:"unlimited Public Projects",
      ispublicProject:true,
      communityAccess:"community Access",
      isCommunityAccess:true,
      privateProject:"unlimited Phone Support",
      isPrivateProject:false,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:false,
      SubDomain:"Free SubDomain",
      isSubDomain:false,
      reports:"Monthly Status Reports", 
      isReports:false
    },
    {
      plan:"PLUS",
      price:9,
      user:"5 users",
      isuser:true,
      storage:"50 GB",
      isstorage:true,
      publicProject:"unlimited Public Projects",
      ispublicProject:true,
      communityAccess:"community Access",
      isCommunityAccess:true,
      privateProject:"unlimited Phone Support",
      isPrivateProject:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"Free SubDomain",
      isSubDomain:true,
      reports:"Monthly Status Reports", 
      isReports:false 
    },
    {
      plan:"PRO",
      price:49,
      user:"unlimited users",
      isuser:true,
      storage:"150 GB",
      isstorage:true,
      publicProject:"unlimited Public Projects",
      ispublicProject:true,
      communityAccess:"community Access",
      isCommunityAccess:true,
      privateProject:"unlimited Phone Support",
      isPrivateProject:true,
      PhoneSupport:"Dedicated Phone Support",
      isPhoneSupport:true,
      SubDomain:"unlimited Free SubDomains",
      isSubDomain:true,
      reports:"Monthly Status Reports", 
      isReports:true 
    }
  ]
  return <>
  <section className="pricing py-5">
  <div className="container">
    <div className="row">
    {
      data.map((e,i)=>{
        return <Card data={e} key={i}/>
      })
    }
    </div>
  </div>
</section>
  </>
}

export default App
