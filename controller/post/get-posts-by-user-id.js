import { postModel } from "../../Schema/post.schema.js";

export const getPostsByUserId = async (req, res) => {
  const params = req.params;
  const id = params.id;
  const posts = await postModel.find({ user: id });

  res.status(200).json(posts);
};
