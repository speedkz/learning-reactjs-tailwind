import Input from "components/ui/Input";
import { ContactUser } from "types/ContactUser";
import ContactItem from "./ContactItem";
import ContactListTopbar from "./ContactListTopbar";
const CONTACTS: ContactUser[] = require("static/contacts.json");

const ContactList = () => {
  return (
    <div className="flex flex-col divide-y w-[350px] border-r">
      <ContactListTopbar />
      <div>
        <div className="flex justify-center px-6 py-3">
          <Input
            className="w-full"
            prependIcon={"Search"}
            placeholder="Search messages"
          />
        </div>
        <div
          className={
            "flex flex-col gap-y-2 px-3 overflow-y-auto" +
            " h-[calc(100vh-166px)]"
          }
        >
          {CONTACTS.map((contact, i) => (
            <ContactItem key={i} contact={contact} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactList;
