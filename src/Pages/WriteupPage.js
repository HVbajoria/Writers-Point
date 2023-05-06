import confetti from "canvas-confetti";
import { ethers } from "ethers";
import { useParams } from "react-router-dom";
import ProfileBar from "../components/ProfileBar";
import useStore from "../Store/store";
import abi from "../utils/ABI.json";
import { CONTRACT_ADDRESS } from "../utils/utils";
import back from "../Assets/back.svg";
const WriteupPage = () => {
   
  const store = useStore();
  const { id } = useParams();
  const detailWriteups = store.detailWriteups;
  console.log(detailWriteups);
  const ABI = abi.abi;
  const filename = detailWriteups[id].coverImage.split("/")[3];
  const filehash = detailWriteups[id].coverImage.split("/")[2].split(".")[0];
  const img_url = `https://ipfs.io/ipfs/${filehash}/${filename}`;
  const sendTip = async (owner, e) => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum, "any");
        const signer = provider.getSigner();
        const WritersPoint = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        console.log("hi");
        console.log();
        const tipTxn = await WritersPoint.tipToOwner(detailWriteups[id].ownedBy, {
          value: ethers.utils.parseEther("0.01"),
        });
        await tipTxn.wait();
        const msg = document.getElementsByClassName("confetiScren")[0];
        msg.classList.remove("hidden");
        confetti({
          particleCount: 480,
          startVelocity: 30,
          spread: 360,
          origin: {
            x: Math.random(),
            // since they fall down, start a bit higher than random
            y: Math.random() - 0.2,
          },
        });
        setTimeout(() => {
          msg.classList.add("hidden");
        }, 1000);
        console.log("mined ", tipTxn.hash);
        console.log("tip send");
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (detailWriteups !== "") {
    return (
      <>
        {/* <div className="hidden confetiScren fixed h-48 w-2/5  my-96 rounded-xl p-10 text-5xl text-center bg-slate-300">
                    Thanks For Your Tip
                </div> */}
        <div className="bg-[#ffffff] w-screen flex-1 overflow-y-scroll Scroll px-10">
          <div className="flex justify-between mt-4 items-center">
            <img
              src={back}
              alt=""
              className="h-6 w-6"
              onClick={() => window.history.back()}
            />
            <button
              className="bg-gradient-to-r from-red-500 to-purple-500 text-xl px-4 py-2 rounded-xl  text-white font-bold"
              onClick={sendTip}
            >
              💰 Loved? Send Token 
            </button>
          </div>
          <div className="flex justify-between mt-2 items-center"></div>
          <hr
          style={{
          background: 'grey',
          color: 'grey',
          borderColor: 'grey',
          height: '2.5px',
        }}/>
          <ProfileBar detailWriteups={detailWriteups} id={id} />
          <div className="mt-2">
            <h2 className="text-3xl font-bold font-Four">
              {detailWriteups[id].Title}
            </h2>
            <h3 className="text-2xl mt-3 font-semibold text-[#757575] font-Five">
              {detailWriteups[id].subTitle}
            </h3>
            <div className="max-h-full min-h-[368px] mb-8 w-80 shadow-2xl mx-auto rounded-xl p-4 pt-6 overflow-hidden border-2  hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-7">
            <img
              src={img_url}
              className="mt-6 mx-auto h-80 w-80 rounded-xl"
              alt="body-img"
            />
            </div>
            <div className="mt-8 text-xl text-center rounded-xl mb-8 font-Three mx-15 space-around bg-gradient-to-r from-slate-300 to-slate-100">
              <p>{detailWriteups[id].Content}</p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return <h1>Loading</h1>;
  }
};
export default WriteupPage;
