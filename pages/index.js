import Image from 'next/image'
import MainBanner from '@/components/homepage/MainBanner'
import Newlaunches from '@/components/homepage/NewLaunches'
import Yuva from '@/components/homepage/YuvaTwo'
import Agni from '@/components/homepage/Agni'
import RedMobile from '@/components/homepage/Mobile'
import FreeService from '@/components/homepage/FreeService'
 
 
  
 
export default function Home() {
  return (
    <main>
     <MainBanner/>
 <Newlaunches/>
 <Yuva/>
 <RedMobile/>
 <Agni />
 <FreeService />
      
    </main>
  )
}
