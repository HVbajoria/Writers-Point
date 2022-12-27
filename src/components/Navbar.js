import useStore from "../Store/store";
import logo from "../Assets/WritersPoint-logos_black.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  const store = useStore();
  const currentAccount = store.currentAccount;
  const setWriteWriteup = store.setWriteWriteup;

  return (
    <div className="bg-white h-20 w-full px-8 sticky top-0 shadow-lg shadow-indigo-500/40">
      <div className="flex items-center justify-between h-full text-neutral-400 text-base font-medium">
        <Link to={'/'}>
          <div>
            <img src={logo} alt="WritersPoint" className="h-44 w-auto" />
          </div>
        </Link>
        <div className="flex items-center justify-between">
            <button onClick={() => { setWriteWriteup(true) }} className="rounded-full bg-gradient-to-r from-blue-400 to-purple-900 hover:scale-105 px-4 py-3 text-white mr-4">
              <span className="text-lg mx-4 cursor-pointer">Create your world!</span>
            </button>
          <button className="rounded-full bg-gradient-to-r from-slate-400 to-white-100 hover:scale-105 px-8 py-3 text-black">
            {currentAccount
              ? currentAccount.slice(0, 4) +
              "..." +
              currentAccount.slice(currentAccount.length - 4, currentAccount.length)
              : "Connect"}
          </button>
        </div>
      </div>
    </div>
  );
}
