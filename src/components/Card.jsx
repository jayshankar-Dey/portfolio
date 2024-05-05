/* eslint-disable react/prop-types */


const Card = ({logo,title,project}) => {
  return (
    <>
     <div className="flex flex-col justify-center items-center border p-5 m-2 bg-white">
      <h1 className="text-6xl md:text-7xl text-yellow-400">{logo}</h1>
      <h1 className="font-semibold">{title}</h1>
      <p className="text-gray-400 text-[14px]">{project}</p>
    </div>

    </>
  )
}

export default Card