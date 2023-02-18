import Cards from '@/components/Cards/Cards'
import StatCards from '@/components/Cards/StatCards'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {

    const config = {
        botdavet: "https://google.com"
    }

    return (
        <>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="container mx-auto">
                <div className='flex flex-col justify-center items-center h-[500px] gap-10'>
                    <div className=''>

                        <h1 className='md:text-5xl text-3xl font-bold text-white w-[450px] md:w-full'><span className='text-blue-600'>PlusBot</span> ile sunucunuz daha iyi</h1>
                    </div>
                    <div className='flex gap-5'>
                        <a href={config.botdavet} className='bg-sky-600/20 font-semibold hover:bg-sky-600/30 px-8 py-3 rounded-lg text-blue-600 hover:-translate-y-3 duration-300'>Sunucuna Ekle</a>
                        <a href={config.botdavet} className='bg-blue-600 px-8 rounded-lg text-white hover:bg-blue-900 flex justify-center items-center hover:translate-y-3 duration-300'>Giriş Yap</a>
                    </div>
                </div>

                <div className='flex flex-col gap-48'>

                    <div className='xl:bg-gray-800 h-[350px] rounded-3xl md:flex justify-center items-center gap-10 flex-wrap'>
                        <div className="relative w-full h-[320px] md:w-[550px]">
                            <Image alt='' src={'/images/pb-bg.png'} fill className='' />
                        </div>
                        <div className="">
                            <h1 className='text-5xl text-blue-600 font-bold'>PlusBot</h1>
                            <p className='w-[450px] text-white font-medium text-sm'>Yetkili ve koruma Komutları ile sunucunuzu daha güvenli hale getirin</p>
                        </div>

                    </div>

                    <div className=' xl:bg-gray-800 h-[350px] rounded-3xl md:flex justify-center items-center gap-10 flex-wrap flex-row-reverse'>

                        <div className="relative w-full h-[400px] md:w-[550px] md:h-[320px]">
                            <Image alt='' src={'/images/pb-bg.png'} fill />
                        </div>

                        <div className="">
                            <h1 className='text-5xl text-blue-600 font-bold'>PlusBot</h1>
                            <p className='w-[450px] text-white font-medium text-sm'>Eğlence ve kullanıcı komutları ile daha iyi</p>
                        </div>

                    </div>
                </div>
                <div className='mt-56'>
                    <div className="">
                        <Cards />
                    </div>
                </div>

                <div className='md:flex flex-wrap justify-center  md:justify-between items-center my-10'>
                    <div className=' flex flex-col  gap-5 my-10'>
                        <h1 className='text-blue-600 text-4xl font-bold'>PlusBot</h1>
                        <div className="flex justify-start flex-wrap gap-10">
                            <StatCards />
                        </div>
                    </div>
                    <div>
                        <p className='w-[330px] text-gray-400 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio voluptatum tenetur nulla, dolorum vero commodi unde eum, incidunt voluptatibus optio distinctio quibusdam amet, temporibus assumenda animi magnam aperiam adipisci atque?</p>
                    </div>
                </div>

            </div>

        </>
    )
}
