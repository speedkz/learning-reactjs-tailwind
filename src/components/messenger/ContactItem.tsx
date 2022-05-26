import { CurrentContactContext } from "pages/messenger";
import { useContext } from "react";
import { CategoryType, ContactUser } from "types/ContactUser";

const ContactItem = ({ contact }: { contact: ContactUser }) => {
  const { image, name, status, categories } = contact;
  const categoryStyle = (type: CategoryType) => {
    const styles = {
      [CategoryType.IMPORTANT]: "text-orange-500 bg-orange-200",
      [CategoryType.NORMAL]: "text-green-500 bg-green-200",
      [CategoryType.OTHER]: "text-slate-500 bg-slate-200",
    };
    return styles[type];
  };
  const { contact: currentContact, setContact } = useContext(
    CurrentContactContext
  );
  return (
    <div
      className={
        "flex space-x-4 p-3 cursor-pointer rounded-md" +
        (currentContact.id === contact.id ? " bg-violet-100" : "")
      }
      onClick={() => setContact(contact)}
    >
      <img
        src={image}
        alt={name}
        className="rounded-md w-12 h-12 object-cover"
      />
      <div>
        <p className="text-sm font-bold text-slate-800">{name}</p>
        <p className="text-xs text-slate-400 mb-2">{status}</p>
        <div className="flex items-center gap-x-2 gap-y-2 flex-wrap">
          {categories.map((category, i) => (
            <div
              key={i}
              className={
                "flex justify-center w-fit h-fit px-2 py-1 rounded-lg text-xs capitalize " +
                categoryStyle(category.type)
              }
            >
              {category.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactItem;
