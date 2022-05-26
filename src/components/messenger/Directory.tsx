import DirectoryHeader from "./DirectoryHeader";
import DirectoryTeamMembersList from "./DirectoryTeamMembersList";

const Directory = () => {
  return (
    <div className="w-full">
      <DirectoryHeader />
      <DirectoryTeamMembersList />
    </div>
  );
};

export default Directory;
