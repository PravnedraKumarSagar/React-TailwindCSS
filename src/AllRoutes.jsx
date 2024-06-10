import React from 'react'
import {Routes, Route} from 'react-router-dom'

import About from './Pages/About'
import Services from './Components/Services/Services'
import Hero from './Components/Home/Hero'
import Mentors from './Components/Home/Mentors'
import Pricing from './Pages/Pricing'
import Contact from './Pages/Contact'
import HelpGuide from './Pages/HelpGuide'
import ResearchAssistant from './Pages/ResearchAssistant'
import Testimonials from './Components/Home/Testimonials'
import Blogs from './Components/Home/Blogs'
import PHDDissertation from './Components/Services/PHDDissertation'
import CourseWork from './Components/Services/CourseWork'
import LiteratureReview from './Components/Services/LiteratureReview'
import PHDResearchMethodology from './Components/Services/PHDResearchMethodology'
import DataAnalytics from './Components/Services/DataAnalytics'
import Manuscript from './Components/Services/Manuscript'
import EditingServices from './Components/Services/EditingServices'
import Courses from './Components/Services/Courses'
import Industries from './Components/Industries/Industries'
import Industry from './Components/Industries/AcademicLawWriting'
import AcademicLawWriting from './Components/Industries/AcademicLawWriting'
import BusinessManagement from './Components/Industries/BusinessManagement'
import EngineeringTechnology from './Components/Industries/EngineeringTechnology'
import ArtsHumanities from './Components/Industries/ArtsHumanities'
import EconomicsFinance from './Components/Industries/EconomicsFinance'
import BiologicalLifeScience from './Components/Industries/BiologicalLifeScience'
import MedicineHealthcare from './Components/Industries/MedicineHealthcare'
import ComputerScienceInformation from './Components/Industries/ComputerScienceInformation'

function HomePage() {
    return (
      <>
        <Hero />
        <Mentors />
        <Testimonials/>
        <Blogs/>
      </>
    );
  }

function AllRoutes() {
  return (
    <Routes>
        <Route exact path='/' element={<HomePage/>} />
        <Route exact path='/about' element={<About/>} />

        <Route exact path='/services' element={<Services/>} />
        <Route exact path='/services/dissertation' element={<PHDDissertation/>} />
        <Route exact path='/services/course-work' element={<CourseWork/>} />
        <Route exact path='/services/literature-review' element={<LiteratureReview/>} />
        <Route exact path='/services/research-methodology' element={<PHDResearchMethodology/>} />
        <Route exact path='/services/analytics' element={<DataAnalytics/>} />
        <Route exact path='/services/manuscript' element={<Manuscript/>} />
        <Route exact path='/services/editing' element={<EditingServices/>} />
        <Route exact path='/services/courses' element={<Courses/>} />

        <Route exact path='/industries' element={<Industries/>} />
        <Route exact path='/industries/academic-law-writing' element={<AcademicLawWriting/>} />
        <Route exact path='/industries/business-management' element={<BusinessManagement/>} />
        <Route exact path='/industries/engineering-technology' element={<EngineeringTechnology/>} />
        <Route exact path='/industries/arts-humanities' element={<ArtsHumanities/>} />
        <Route exact path='/industries/economics-finance-academic' element={<EconomicsFinance/>} />
        <Route exact path='/industries/biological-life-science' element={<BiologicalLifeScience/>} />
        <Route exact path='/industries/medicine-healthcare' element={<MedicineHealthcare/>} />
        <Route exact path='/industries/computer-science-information' element={<ComputerScienceInformation/>} />

        <Route exact path='/pricing' element={<Pricing/>} />
        <Route exact path='/contact' element={<Contact/>} />
        <Route exact path='/help-guide' element={<HelpGuide/>} />
        <Route exact path='/research-assistant' element={<ResearchAssistant/>} />
        
    </Routes>
  )
}

export default AllRoutes
