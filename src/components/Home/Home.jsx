import Layout from "../Layout"
import myPic1 from "../../assets/images/myPic1.png"
import { Typewriter } from 'react-simple-typewriter'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ComputerIcon from '@mui/icons-material/Computer';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import Card from "../Card";
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
const Home = () => {
  
  return (
    <Layout>
        <div className="p-2 bg-white  mt-1 md:mt-0 rounded flex flex-col justify-center items-center md:flex-row">
          {/* //Tesxtsection */}
        <div  className=" w-96 h-60 md:h-96   text-center  items-center  py-10 px-2">
           <h1 className="font-sans font-bold text-3xl">Iam JayShankar Dey
             <span className="text-yellow-400 mx-2">
             <Typewriter
            words={['fullStack Devloper', ' a ui/ux Designer', ' a Devloper', 'MERN Stack Devloper!','Data Analyst']}
            loop={100}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            
          />
            </span>
             </h1>
             <p className="text-gray-400 mt-5">t non. Perspiciatis repellat alias cupiditate possimus a, modi, inventore, eius error delectus rerum tempore.</p>

             <div className=" w-36 justify-center items-center  md:h-44 relative flex ">
             <button title="Hire me" className="m-2  p-1 bg-yellow-400 rounded text-[14px] 
              font-semibold h-10 text-center  border shadow-md">HIRE ME <ArrowForwardIcon/></button>
             </div>
        </div>
{/* ////endtext */}
        <div  className="w-96 h-96 flex justify-center align-middle items-center overflow-hidden ">
         <img src={myPic1} alt=""  className="myPic1" />
        </div>
        </div>

          {/* ///service */}
       <div className=" flex flex-col text-center items-center justify-center">
        <h1 className="text-xl md:text-2xl mt-2 font-semibold "> My Service</h1>
        <p className="text-gray-400 text-[13px] mt-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima beatae hic nesciunt rerum aliquid ut mollitia debitis vero. Saepe dolor dolorem fuga voluptates molestias, beatae recusandae amet nisi odit maiores.</p>

       </div>
       {/* end service */}
     {/* //card   */}
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-3 xl:grid-cols-4">

   <Card logo={<ComputerIcon fontSize="inherit" />} title={"Web Devlopment"} project={"Blog, E-commerce"}/>

   <Card logo={<DeveloperBoardIcon fontSize="inherit" />} title={"UI/UX Designer"} project={"Blog, E-commerce"}/>

   <Card logo={<SignalCellularAltIcon fontSize="inherit" />} title={"Data Analyst"} project={"Blog, E-commerce"}/>

   <Card logo={<VideogameAssetIcon fontSize="inherit" />} title={"Game Devlopment"} project={"Ludo, TikTak to"}/>
    

     </div>
     {/* //endcard */}
      
       
    </Layout>
  )
}

export default Home