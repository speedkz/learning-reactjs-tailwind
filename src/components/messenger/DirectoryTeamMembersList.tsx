import { User } from "types/User";
import DirectoryTeamMember from "./DirectoryTeamMember";

const USERS: User[] = require("static/users.json");

const DirectoryTeamMembersList = () => {
  return (
    <div className="w-full px-4 py-6 border-b">
      <div className="text-sm font-bold">Team Members</div>
      {USERS.map((user, i) => (
        <div className="mb-2 last:mb-0">
          <DirectoryTeamMember key={i} user={user} />
        </div>
      ))}
    </div>
  );
};

export default DirectoryTeamMembersList;
