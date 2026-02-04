import { Suspense } from 'react'
import './App.css'
import Nav from './Componants/nav'
import Hero from './Componants/Navbar/Hero'
import Navbar from './Componants/Navbar/Navbar'
import PricingOptions from './Componants/PricingOption/PricingOptions'
import ResultsCharts from './Componants/RessultsCharts/ResultsCharts'
import axios from 'axios'
import MarksChart from './Componants/MarksChart/MarksChart'

const pricingPromise= fetch('/public/pricingData/pricingData.json').then(res => res.json());
// console.log(PricingPromise);
// const marksPromise =fetch('/public/pricingData/marksData.json').then(res => res.json()); isn't used
// this 

const marksPromise =axios.get('/public/pricingData/marksData.json')

function App() {
  

  return (
    <>
     <header>
      <Navbar></Navbar>
      {/* <Hero></Hero> */}
    
     </header>

     <main className="mt-8">
      
      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

      <Suspense fallback={<span className="loading loading-ring loading-lg"></span>}>
        <MarksChart marksPromise={marksPromise}></MarksChart>
      </Suspense>

      <ResultsCharts Suspense={false}></ResultsCharts>
     </main>

     <footer></footer>
    </>
  )
}

export default App;
