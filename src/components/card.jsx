import React from 'react'

function card({data}) {

  return  <div className="col-lg-4">
  <div className="card mb-5 mb-lg-0">
    <div className="card-body">
      <h5 className="card-title text-muted text-uppercase text-center">{data.plan}</h5>
      <h6 className="card-price text-center">${data.price}<span className="period">/month</span></h6>
      <hr/>
      <ul className="fa-ul">
        <li className={data.isuser?"":"text-muted"}><span className="fa-li"><i className={data.isuser?"fas fa-check":"fas fa-times"}></i></span>{data.plan!=="FREE"?<b>{data.user}</b>:<>{data.user}</>}</li>
        <li className={data.isstorage?"":"text-muted"}><span className="fa-li"><i className={data.isstorage?"fas fa-check":"fas fa-time"}></i></span>{data.storage}</li>
        <li className={data.ispublicProject?"":"text-muted"}><span className="fa-li"><i className={data.ispublicProject?"fas fa-check":"fas fa-time"}></i></span>{data.publicProjects}</li>
        <li className={data.isCommunityAccess?"":"text-muted"}><span className="fa-li"><i className={data.isCommunityAccess?"fas fa-check":"fas fa-time"}></i></span>{data.communityAccess}</li>
        <li className={data.isPrivateProject?"":"text-muted"}><span className="fa-li"><i className={data.isPrivateProject?"fas fa-times":"fas fa-time"}></i></span>{data.privateProject}</li>
        <li className={data.isPhoneSupport?"":"text-muted"}><span className="fa-li"><i className={data.isPhoneSupport?"fas fa-times":"fas fa-time"}></i></span>{data.PhoneSupport}</li>
        <li className={data.isSubDomain?"":"text-muted"}><span className="fa-li"><i className={data.isSubDomain?"fas fa-times":"fas fa-time"}></i></span>{data.plan==="PRO"?<><b>unlimited</b>  {data.SubDomain}</>:data.Subdomain}</li>
        <li className={data.isReports?"":"text-muted"}><span className="fa-li"><i className={data.isReports?"fas fa-times":"fas fa-time"}></i></span>{data.Reports}</li>
      </ul>
      <div className="d-grid">
        <a href="#" className="btn btn-primary text-uppercase">Button</a>
      </div>
    </div>
  </div>
</div>
}

export default card
