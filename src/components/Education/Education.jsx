import BteckHistory from "../BteckHistory";
import Layout from "../Layout";
import Skils from "../Skils";
import me1 from "../../assets/images/me1.jpg"
import myPic from "../../assets/images/myPic.jpg"

const Education = () => {
  return (
    <Layout>
      <div className="md:flex justify-between">
        <div className="md:w-1/2 p-2 bg-white md:mx-2 my-2 rounded-md">
          <BteckHistory/>
        </div>

        {/* //education persentage */}
        <div className="mt-2">
       <Skils/>
      </div>
      </div>
      <div className="mt-2 flex flex-col md:flex-row mt-3">

         <div className="flex flex-col md:flex-row bg-white rounded-md my-1" >
          <img src={me1} alt=""  className="lg:h-52 "/>
          <div className="p-2">
          <h1>Iam IN the </h1>
          <p> amet consectetur adipisicing elit. Nemo iste nobis odio temporibus fugiat deleniti labore delectus mollitia dicta quod,  Laboriosam quo fugiat modi. Vero tempora sed commodi molestiae fuga in adipisci veritatis</p>
          </div>
         </div>

         <div className="flex flex-col md:flex-row bg-white rounded-md my-1 py-2" >
          <img src={myPic} alt=""  className="lg:h-52 "/>
          <div className="p-2">
          <h1>Iam IN the </h1>
          <p> amet consectetur adipisicing elit. Nemo iste nobis odio temporibus fugiat deleniti labore delectus mollitia dicta quod, Laboriosam quo fugiat modi. Vero tempora sed commodi molestiae fuga in adipisci veritatis </p>
          </div>
         </div>

      </div>
    </Layout>
  );
};

export default Education;
