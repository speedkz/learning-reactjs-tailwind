import { ChevronDown, Plus } from "react-feather";

const ContactListTopbar = () => {
  return (
    <div className="flex px-6 py-8 items-center gap-x-2">
      <p className="text-xl font-bold">Messages</p>
      <ChevronDown />
      <div className="flex-1 flex justify-end ">
        <div className="w-10 h-10 shadow-lg bg-violet-500 rounded-full flex justify-center items-center">
          <Plus color="white" />
        </div>
      </div>
    </div>
  );
};
export default ContactListTopbar;
