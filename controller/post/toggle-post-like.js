import { postModel } from "../../Schema/post.schema.js";

export const togglePostLike = async (req, res) => {
  const user = req.user;
  const params = req.params;

  const postId = params.postId;

  const post = postModel.findById(postId);

  const postLike = post.likes;

  const isLiked = postLike.includes(user._id);

  if (isLiked) {
    postModel.findByIdAndUpdate(postId, {
      likes: postLike.filter((likes) => likes !== user._id),
    });
  } else {
    postModel.findByIdAndUpdate(postId, {
      likes: [...postLike, user._id],
    });
  }
  res.status(200).json({ message: "success" });
};
