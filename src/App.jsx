
import { useState } from 'react'
import './App.css'
// import Bookmarks from './componants/Bookmarks/Bookmarks'
import Courses from './componants/Courses/Courses'
import Home from './componants/Home/Home'
import CalculationCard from './componants/calculationCard/calculationCard'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [calculationCard,setCalculationCard] =useState([])
  const [totalCredit,setTotalCredit] =useState(0)
  const [creditRemaining,setCreditRemaining] = useState(0)

const handleAddCard = item =>{
 const isExist =calculationCard.find(element =>element.id === item.id);
 
 let count =item.credit;

 if (isExist){
  return toast('already booked')
 }else{
calculationCard.forEach(element =>{
  count += element.credit
})
setTotalCredit(count)
const remainingCredit =20-count;
 setCreditRemaining(remainingCredit);
if( totalCredit >20){
  return toast('credit are complete')
}else{
  setCalculationCard([...calculationCard,item])
}
 
 
 
 }
}
  return (
    <>
     <Home></Home>
     <div className="md:flex max-w-screen-xl mx-auto my-6">
     <Courses handleAddBookmarks={handleAddCard}></Courses>
     <CalculationCard 
     totalCredit={totalCredit} 
     calculationCard={calculationCard} 
     creditRemaining={creditRemaining}></CalculationCard>
     <ToastContainer />
     </div>
    </>
  )
}

export default App
