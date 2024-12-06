import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData=[
  {
        imgUrl:weatherImg,
        title:"Event Planning",
        desc: "Event planning is organizing and coordinating all details to create a successful and memorable event.",
  },
  {
    imgUrl:customizationImg,
    title:"Best Event Guide",
    desc: "The best event guide provides clear steps, tips, and tools to plan and execute a successful event seamlessly.",
  },
  {
    imgUrl:guideImg,
    title:"Virtual Events",
    desc: "Virtual events are online gatherings where participants connect and interact through digital platforms.",
  }
]
const ServiceList = () => {
  return <>
  {
    servicesData.map((item,index)=><Col lg='3' key={index}><ServiceCard item = {item}/></Col>)
  }
  </>
}

export default ServiceList