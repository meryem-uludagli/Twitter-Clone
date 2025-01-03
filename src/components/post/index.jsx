import Buttons from "./buttons";
import Content from "./content";
import Dropdown from "./dropdown";
import User from "./user";

const Post = ({ tweet }) => {
  return (
    <div className="border-b border-fourth p-4 flex gap-2">
      <img src={tweet.user.photo} className="size-12 rounded-full" />

      <div className="w-full">
        <div className="flex justify-between">
          <User tweet={tweet} />
          <Dropdown />
        </div>
        <Content data={tweet.content} />
        <Buttons tweet={tweet} />
      </div>
    </div>
  );
};

export default Post;
