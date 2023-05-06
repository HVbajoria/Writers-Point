import { ethers } from "ethers";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import WriteupCard from "../components/WriteupCard";
import useStore from "../Store/store";
import { CONTRACT_ADDRESS, ABI } from "../utils/utils";
import WriteWriteups from "./Writeups";

function Container() {
  const store = useStore();
  const writeWriteup = store.writeWriteup;
  const detailWriteups = store.detailWriteups;

  useEffect(() => {
    const getAllWriteups = async () => {
      try {
        const { ethereum } = window;
        //const store = useStore();
        if (!detailWriteups) {
          if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum, "any");
            const signer = provider.getSigner();
            const Writeup = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
            const AllWriteups = await Writeup.getAllWriteups();
            // eslint-disable-next-line
            store.setDetailWriteups(AllWriteups);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAllWriteups();
  }, [detailWriteups]);

  return (
    <div className="bg-white flex-1 overflow-y-scroll Scroll px-8 py-6 relative">
      <div className="w-full flex flex-row flex-wrap min-h-screen justify-center gap-x-6 overflow-y-scroll Scroll">
        {detailWriteups &&
          detailWriteups.map((item, index) => {
            return (
              <Link to={`/writeup/${index}`}>
                <WriteupCard key={index} writeupdata={item} />
              </Link>
            );
          })}
      </div>
      <WriteWriteups
        show={writeWriteup ? 1 : 0}
        onClickOutside={() => store.setWriteWriteup(false)}
      />
    </div>
  );
}

export default Container;
