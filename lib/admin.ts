import { auth } from "@clerk/nextjs";

const allowedIds = ["user_2domz2b4MuJpOQpUwgk9PQaDCEA"];

export const isAdmin = () => {
  const { userId } = auth();
  if (!userId) return false;

  return allowedIds.indexOf(userId) !== -1;
};
