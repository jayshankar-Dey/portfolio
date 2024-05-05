/* eslint-disable react/prop-types */

import { useState } from "react";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import myPic from "../assets/images/myPic.jpg";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PinterestIcon from "@mui/icons-material/Pinterest";
import DownloadIcon from "@mui/icons-material/Download";
import AddHomeIcon from '@mui/icons-material/AddHome';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import CreateIcon from '@mui/icons-material/Create';
import ContactPageIcon from '@mui/icons-material/ContactPage';
//import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  const [showsidebar, setShowSidebar] = useState(false);
  return (
    <div className=" p-1  lg:mx-16 h-screen ">
      <div className="flex">
        {/* //sidebar */}
        <div
          className={`h-screen md:border shadow mr-1  ${
            showsidebar ? "block" : "hidden"
          } md:block w-60 bg-white md:rounded-md duration-300  overflow-scroll absolute z-10 `}
        >
          {/* //closebutton */}
          <div className="flex ">
            <button
              className={`absolute right-2 shadow  border-gray-100 border-[2px] mt-2 bg-yellow-400 rounded-full text-red-700  ${
                showsidebar ? "block" : "hidden"
              }`}
              onClick={() => setShowSidebar(!showsidebar)}
            >
              <CloseIcon className="" />
            </button>
          </div>
          {/* ///endclosebutton */}
          <div className="flex flex-col w-full  justify-center items-center mt-5">
            <div className="p-2 rounded-full overflow-hidden flex justify-center items-center border w-20 h-20 bg-black">
              <img src={myPic} alt="mypic" className="h-24" />
            </div>
            <h2 className="font-serif text-md font-bold text-gray-500 mt-1">
              Iam <span className="text-yellow-500">JayShankar Dey</span>
            </h2>
            <p className="text-[13px] text-gray-400">FulStack Devloper</p>
          </div>
          {/* ///endimage part */}
          {/* iconprt */}
          <div className="flex justify-start gap-4 mt-4 px-6 border-b-2 p-2 mx-4">
            <button className=" ml-2  rounded-full border bg-yellow-400     ">
              <InstagramIcon fontSize="inherit" className="m-1" />
            </button>

            <button className="  rounded-full border bg-yellow-400     ">
              <FacebookIcon fontSize="inherit" className="m-1" />
            </button>

            <button className="  rounded-full border bg-yellow-400     ">
              <LinkedInIcon fontSize="inherit" className="m-1" />
            </button>

            <button className="  rounded-full border bg-yellow-400     ">
              <PinterestIcon fontSize="inherit" className="m-1" />
            </button>
          </div>
          {/* //endiconpart */}
          {/* //parsanaldetails */}
          <div className="flex flex-col p-4 border-b-2 mx-1">
            <div className="flex justify-between my-1">
              <p className="bg-yellow-400 text-[13px] px-3 font-semibold rounded-sm">
                Age:
              </p>
              <p className="font-bold">20</p>
            </div>

            <div className="flex justify-between my-1">
              <p className="bg-yellow-400 text-[13px] px-3 font-semibold rounded-sm">
                Residence:
              </p>
              <p className="font-bold">BD</p>
            </div>

            <div className="flex justify-between my-1">
              <p className="bg-yellow-400 text-[13px] px-3 font-semibold rounded-sm">
                Freelancing:
              </p>
              <p className="text-[14px] text-green-500">Avallible</p>
            </div>

            <div className="flex justify-between my-1">
              <p className="bg-yellow-400 text-[13px] px-3 font-semibold rounded-sm">
                Address:
              </p>
              <p className="font-semibold text-[14px]">Balasore jaleswar</p>
            </div>
          </div>
          {/* endparsanaldatails */}
          {/* //language */}
          <div className="flex flex-col p-4 border-b-2 mx-2">
            <div>
              <h1 className="font-semibold">Languages</h1>
              <div className="flex justify-between ">
                <p className="text-[13px] font-semibold">Hindie</p>
                <p>60%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-40"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">English</p>
                <p>30%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-16"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Odio</p>
                <p>90%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-48"></div>
              </div>
            </div>
          </div>
          {/* endlanguag */}

          {/* ///skils */}
          <div className="flex flex-col p-4 border-b-2 mx-2">
            <div>
              <h1 className="font-semibold">Skils</h1>
              <div className="flex justify-between ">
                <p className="text-[13px] font-semibold">Html</p>
                <p>100%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-48"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Css</p>
                <p>80%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-44"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">JavaScript</p>
                <p>40%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-16"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Php</p>
                <p>40%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-16"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Django</p>
                <p>50%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-24"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Node Js</p>
                <p>30%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-10"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">React Js</p>
                <p>60%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-32"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Core Java</p>
                <p>50%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-24"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-3">
                <p className="text-[13px] font-semibold">Core Python</p>
                <p>50%</p>
              </div>
              <div className="w-full h-1 bg-slate-300">
                <div className="bg-yellow-400 h-1 absolute w-24"></div>
              </div>
            </div>
          </div>
          {/* //endskils */}
          {/* //extraskils */}
          <div className="p-2 mx-4">
            <h1 className="font-semibold">Extra skils</h1>
            <p className="text-[13px]">Bootstrap</p>
            <p className="text-[13px]">Tailwind Css</p>
            <button className="bg-yellow-400 p-1 mt-2 mb-4 rounded font-mono w-full text-white">
              Downlood CV <DownloadIcon />
            </button>
          </div>
          {/* emdextraskils */}
        </div>
        {/* body */}
        <div className="h-full w-full  overflow-scroll flex  flex-col justify-center ">
          <div className="flex p-1 bg-white rounded-l-md md:hidden ">
            <button onClick={() => setShowSidebar(!showsidebar)}>
              {" "}
              <DehazeIcon className="cursor-pointer text-yellow-500 mx-2" />
            </button>
            </div>
         {
            showsidebar?(<div className="md-1 md:ml-44 md:pl-20 md:cursor-default h-[890px] lg:h-[750px] md:h-[710px] sm:h-[870px] cursor-pointer" onClick={() => setShowSidebar(!showsidebar)}>
            {children}
            </div>):(
                <div className="mx-1 md:ml-44 md:pl-20 md:cursor-default  cursor-pointer h-[890px] lg:h-[750px] sm:h-[870px] md:h-[710px]" >
                {children}
                </div>
            )
         }
        </div>
        {/* menu */}
        <div className="h-screen md:border  md:ml-2  w-16 bg-white rounded-r-md md:rounded-md duration-300 flex flex-col justify-center text-center align-middle gap-4 ">

          <Link to="/" title="Home page" className=" bg-yellow-400 p-2 mx-auto rounded-full text-center flex items-center justify-center "><AddHomeIcon fontSize="inherit" /></Link>

          <Link to={"/Resume"} title="Resume page" className=" bg-gray-200 p-2 mx-auto rounded-full text-center flex items-center justify-center "><DashboardCustomizeIcon fontSize="inherit"/></Link>


          <Link to={"/education"} title="Education page" className=" bg-gray-200 p-2 mx-auto rounded-full text-center flex items-center justify-center "><SchoolIcon fontSize="inherit"/></Link>


          <Link to={"/Contact"} title="Contact page" className=" bg-gray-200 p-2 mx-auto rounded-full text-center flex items-center justify-center "><ContactPageIcon fontSize="inherit"/></Link>
        
         

          <Link to={"/about"} title="about page" className=" bg-gray-200 p-2 mx-auto rounded-full text-center flex items-center justify-center "><CreateIcon fontSize="inherit"/></Link>
        </div>
        {/* //end */}
      </div>
    </div>
  );
};

export default Layout;
