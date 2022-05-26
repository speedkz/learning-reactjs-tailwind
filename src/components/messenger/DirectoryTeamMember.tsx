import { User } from "types/User";

const DirectoryTeamMember = ({ user }: { user: User }) => {
  return (
    <div className="flex gap-x-4 p-3">
      <img
        src={user.image}
        alt=""
        className="rounded-md w-12 h-12 object-cover"
      />
      <div>
        <p className="text-sm font-semibold">{user.name}</p>
        <p className="text-xs text-slate-500">{user.roles}</p>
      </div>
    </div>
  );
};

export default DirectoryTeamMember;
