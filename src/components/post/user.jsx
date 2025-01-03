import moment from "moment";
import { MdEdit } from "react-icons/md";

const User = ({ tweet }) => {
  const username = tweet.user.name.toLowerCase().replaceAll(" ", "_");
  let date = tweet.createdAt?.toDate();

  date = moment(date).fromNow(true);
  return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gary-400">
      <p className="text-white font-semibold">{tweet.user.name}</p>
      <p className="text-sm">@{username}</p>
      <p className="text-sm">{date}</p>

      {tweet.isEdited && (
        <p>
          <MdEdit className="md:hidden" />
          <span className=" max-md:hidden text-sm">* Edited</span>
        </p>
      )}
    </div>
  );
};

export default User;
