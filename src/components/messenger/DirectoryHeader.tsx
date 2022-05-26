import { MoreVertical } from "react-feather";

const DirectoryHeader = () => {
  return (
    <div className="flex items-center justify-between px-6 py-5 border-b h-[80px]">
      <div className="text-lg font-bold">Directory</div>
      <div className="flex justify-center items-center w-10 h-10 text-violet-500 bg-violet-100 rounded-full">
        <MoreVertical size={24} />
      </div>
    </div>
  );
};

export default DirectoryHeader;
