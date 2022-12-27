export default function WriteupCard({ writeupdata }) {
  const filename = writeupdata.coverImage.split("/")[3];
  const filehash = writeupdata.coverImage.split("/")[2].split(".")[0];
  const img_url = `https://ipfs.io/ipfs/${filehash}/${filename}`;
  
  return (
    <div className="max-h-full min-h-[368px] mb-8 w-80 shadow-2xl flex flex-col rounded-xl p-4 pt-6 overflow-hidden border-2  hover:bg-[hsla(0,0%,100%,.1)] hover:transition-all hover:delay-7">
      <div className="w-full">
        <img src={img_url} alt="banner" className="h-50 w-50 items-center rounded-xl" />
      </div>
      <div className="h-full pt-4 pr-8 text-black flex-1 flex flex-col justify-start">
        <div className="self-start text-2xl font-bold font-Four">
          {writeupdata.Title}
        </div>
        <div className="w-full h-full text-lg my-2 font-Five font-semibold overflow-hidden whitespace-nowrap text-ellipsis">
          {writeupdata.subTitle}
        </div>
        <h4 className="text-xl text-[#4b4b4b] bg-gradient-to-r from-blue-100 to-purple-100">
          By{" "}
          {writeupdata.ownedBy.slice(0, 4) +
            "..." +
            writeupdata.ownedBy.slice(
              writeupdata.ownedBy.length - 4,
              writeupdata.ownedBy.length
            )}
        </h4>
      </div>
    </div>
  );
}
