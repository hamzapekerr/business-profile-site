import React from 'react'
import Title from './Title'
import assets from '../assets/assets'
import { motion } from "motion/react"

const OurWork = () => {

    const workData = [
        {
            title: 'Mobil Uygulama Geliştirme',
            description: 'Fikirlerinizi kullanıcı dostu ve yüksek performanslı mobil uygulamalara dönüştürüyoruz. Her adımı sizinle planlayarak kaliteli sonuçlar üretiyoruz.',
            image: assets.work_mobile_app
        },
        {
            title: 'Yönetim Panelleri ve Dashboardlar',
            description: 'İş süreçlerinizi kolaylaştıracak, verilerinizi anlaşılır ve etkili şekilde görselleştiren yönetim panelleri tasarlıyoruz.',
            image: assets.work_dashboard_management
        },
        {
            title: 'Sağlık & Fitness Uygulamaları',
            description: 'Kullanıcıların hayatını kolaylaştıran ve motive eden sağlık ve fitness çözümleri geliştiriyoruz. Fikirden uygulamaya kadar tüm süreci yönetiyoruz.',
            image: assets.work_fitness_app
        },
    ]


    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.2 }}
            id='our-work' className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-32 text-gray-700 dark:text-white'>
            <Title title='Projelerimiz' desc='Projenizi baştan sona birlikte planlayıp, etkili ve kaliteli çözümler sunuyoruz.' />

            <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl overflow-visible'>
                {
                    workData.map((work, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 , delay: index * 0.2}}
                            viewport={{ once: true }}
                            
                            key={index} className='hover:scale-105 duration-500 transition-transform cursor-pointer'>
                            <img src={work.image} className='w-full rounded-xl' alt="" />
                            <h3 className='mt-3 mb-2 text-lg font-semibold'>{work.title}</h3>
                            <p className='text-sm opacity-60 w-5/6'>{work.description}</p>
                        </motion.div>
                    ))
                }
            </div>
        </motion.div>
    )
}

export default OurWork