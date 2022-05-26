import { ContactUser } from "types/ContactUser";
import { Phone } from "react-feather";

const ChatConvensionHeader = ({ contact }: { contact: ContactUser }) => {
  const { image, name } = contact;
  return (
    <div className="flex items-center justify-between px-6 py-5 border-b h-[80px]">
      <div className="flex gap-x-4">
        <img
          src={image}
          alt={name}
          className="rounded-md w-12 h-12 object-cover"
        />
        <p className="text-xl font-bold text-slate-800">{name}</p>
      </div>
      <div className="flex items-center gap-x-2 px-4 py-3 text-violet-500 bg-violet-100 rounded-lg h-fit">
        <Phone size={16} />
        <p className="text-md font-bold">Call</p>
      </div>
    </div>
  );
};

export default ChatConvensionHeader;
