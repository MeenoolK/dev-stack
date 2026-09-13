import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Skills from './components/Skillfolder/Skills'
import { Suspense } from 'react'


import Footer from './components/Footer'
import type { skillType } from './Types/SkillsType'




const skillFetch = async():Promise<skillType[]> => {

  const rest = await fetch('/SkillsData.json');
  const dataSkill = await rest.json();
  return dataSkill;
}


function App() {

  const skillPromise = skillFetch();
  

  return (
    <>
    <Navbar/>
    <Banner/>
    <Suspense fallback={<h3>Collecting......</h3>}>
      <Skills skillPromise ={skillPromise}/>

    </Suspense>
    


    <Footer/>



    </>
  )
}

export default App
