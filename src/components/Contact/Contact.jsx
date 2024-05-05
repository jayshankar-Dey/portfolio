import Layout from "../Layout"


const Contact = () => {
  return (
    <Layout>
        <div className="flex flex-col justify-center items-center py-4">
        <h1 className="font-bold font-mono text-xl lg:text-3xl my-2 text-green-400 ">Contack Me</h1>
        <p className="text-[15px] font-semibold">HIRE ME</p>
        <p className="text-[14px] text-gray-600">You have to Hire me to Your company  amet consectetur adipisicing elit. Ipsum veniam nisi dolore? Reiciendis, eveniet porro?</p>
        </div>

        <div className=" p-3  flex flex-col items-center h-[400px] justify-center ">

          <div className=" md:w-96 w-60 mx-auto mt-2 ">
          <input type="text" className="w-full  bg-transparent  outline-none border-black border-b-2 p-3 " placeholder="Enter Name"/>
          </div>

          <div className=" md:w-96 mx-auto mt-2  w-60">
          <input type="text" className="w-full  bg-transparent  outline-none border-black border-b-2 p-3 " placeholder="Enter Email"/>
          </div>

          <div className=" md:w-96 mx-auto mt-2  w-60">
          <textarea type="text" className="w-full  bg-transparent  outline-none border-black border-b-2 p-3 " placeholder="Enter Message"/>
          </div>

          <div className=" md:w-96 mx-auto  w-60">
         <button className="mt-2 bg-yellow-400 font-semibold p-2 rounded shadow-md w-full md:w-auto">Contact Me</button>
          </div>
        </div>
    </Layout>
  )
}

export default Contact