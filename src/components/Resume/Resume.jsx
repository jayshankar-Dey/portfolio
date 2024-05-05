import Layout from "../Layout"
import myPic from "../../assets/images/myPic.jpg"

const Resume = () => {
  return (
    <Layout>
       <div className="flex p-2 bg-white border rounded-md">
        <img src={myPic} alt=""  className="h-28 rounded-md"/>
       <div className="px-2">
        <h3 className="font-semibold">Iam JayShankar</h3>
        <p className="text-gray-400"><span className="bg-green-400 rounded text-white">FullStack Devloper</span> consectetur, adipisicing elit. Saepe, eius eum ipsa minima veritatis odio placeat mollitia unde magni voluptatem aliquam ipsum itaque dolores aut enim iure, soluta, vero qui corrupti commodi numquam! Ipsum saepe architecto modi numquam, expedita possimus totam tempore ut voluptas facere quas! Necessitatibus iure quasi eius.</p>
       </div>
       </div>
       {/* //Hobby */}
        <div className="flex justify-center items-center flex-col mt-2">
         <h1 className="font-semibold text-lg md:text-xl lg:text-2xl"> MY Hobby And Dreems</h1>
         <p className="text-[12px]  text-gray-400"> consectetur adipisicing elit. Quis laborum nam perspiciatis expedita, quia officiis?</p>
        </div>
    
       <div className="mt-2 bg-white py-4 rounded-md">

        <div className="px-2 my-2">
        <h1 className="font-semibold text-sm md:text-lg ">My Hobby</h1>
        <p className="text-[13px] text-gray-500">My Hobby Was Playing Kabady and Playing Video Games Now Iam intrested in Computer  sit amet consectetur adipisicing elit. Quaerat repellendus unde, ab sed repudiandae eum id temporibus ipsa mollitia. Esse.</p>
        </div>

        <div className="px-2">
        <h1 className="font-semibold text-sm md:text-lg ">My Dreems</h1>
        <p className="text-[13px] text-gray-500">My Dreems Was Become a <span className="font-semibold bg-yellow-500 px-2 text-white rounded-md">MERN Stack</span> Devloper sit amet consectetur adipisicing elit. Quaerat repellendus unde, ab sed repudiandae eum id temporibus ipsa mollitia. Esse.</p>
        </div>

       </div>

       {/* //education */}
       <div className="flex justify-center items-center flex-col mt-2">
         <h1 className="font-semibold text-lg md:text-xl lg:text-2xl"> My Education or Qualification</h1>
         <p className="text-[12px]  text-gray-400"> consectetur adipisicing elit. Quis laborum nam perspiciatis expedita, quia officiis?</p>
        </div>
       <div className=" mt-2 p-1 bg-white rounded-md py-4">

       <div className="px-2">
        <h1 className="font-semibold text-sm md:text-lg ">10Th or Matric</h1>
        <p className="text-[13px] text-gray-500">I Have Completed My <span className="font-semibold bg-pink-300 px-2 text-white rounded-md">Matriculation</span> from <span className="text-white bg-gray-400 font-semibold px-2 rounded">Jaleswar PruthuNath HighSchool Chamargan</span> By Secoring <span className="bg-yellow-400 px-2 rounded font-semibold">78%</span> unde, ab sed repudiandae eum id temporibus ipsa mollitia. Esse.</p>
        </div>

        <div className="px-2 mt-2">
        <h1 className="font-semibold text-sm md:text-lg ">12Th </h1>
        <p className="text-[13px] text-gray-500">I Have Completed My <span className="font-semibold bg-black px-2 text-white rounded-md">+2</span> from <span className="text-white bg-gray-400 font-semibold px-2 rounded">RIHS Bhogori</span> By Secoring <span className="bg-yellow-400 px-2 rounded font-semibold">84%</span> unde, ab sed repudiandae eum id temporibus ipsa mollitia. Esse.</p>
        </div>

       </div>
    </Layout>
  )
}

export default Resume