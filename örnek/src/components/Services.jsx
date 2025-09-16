import React from 'react'
import assets from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'
import { motion } from "motion/react"

const Services = () => {

    const servicesData = [
        {
            title: 'Web Geliştirme',
            description: 'Modern ve ölçeklenebilir web siteleri ve uygulamalar geliştiriyoruz — size özel yazılım çözümleriyle işletmenizin çevrimiçi varlığını güçlendiriyoruz.',
            icon: assets.content_icon
        },
        {
            title: 'Mobil Uygulama Geliştirme',
            description: 'iOS ve Android platformları için kullanıcı dostu, performanslı ve yüksek kaliteli mobil uygulamalar tasarlıyor ve hayata geçiriyoruz.',
            icon: assets.marketing_icon
        },
        {
            title: 'E-Ticaret Çözümleri & Entegrasyon',
            description: 'Online satış kanallarınızı kuruyor, ödeme sistemleri ve takip altyapılarıyla entegre ederek sizi e-ticaret dünyasının lideri haline getiriyoruz.',
            icon: assets.ads_icon
        },
        {
            title: 'UI / UX Tasarım',
            description: 'Kullanıcı deneyimini ön planda tutan; estetik, sezgisel ve işlevsel ön yüz tasarımlarıyla dijital ürünlerinizi öne çıkarıyoruz.',
            icon: assets.social_icon
        },
    ]



    return (
        <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{staggerChildren: 0.2}}
        id='services' className='relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 md:pt-32 text-gray-700 dark:text-white'>
            <img src={assets.bgImage2} alt="" className='absolute -top-110 -left-70 -z-1 dark:hidden'/>

            <Title title='Size nasıl yardımcı olabiliriz?' desc='Adım adım ilerleyerek fikirlerinizi gerçek bir projeye dönüştürebilir ve süreç boyunca sizi yönlendirecek profesyonel destek sunabiliriz.'/>

            <div className='flex flex-col md:grid grid-cols-2'>
                {servicesData.map((service, index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>
        </motion.div>
    )
}

export default Services