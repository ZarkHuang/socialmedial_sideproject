import { getJwtToken, getUser } from "./auth";
import { request } from "../utils/request";

export async function createPost(image, description) {
  const formData = new FormData();
  formData.append("files.image", image);
  formData.append("data", JSON.stringify({ description }));

  return await request("/api/posts", {
    method: "POST",
    body: formData,
    auth: true,
    headers: {
      Authorization: `Bearer ${getJwtToken()}`,
    },
  });
}

/**
 *
 * @param {string} filters
 * @returns
 */
export async function loadPosts(filters = "") {
  const backendUrl = "https://young-ocean-49769-86e356584f5f.herokuapp.com";
  const response = await request(
    "/api/posts?populate=*" + (filters && `&${filters}`)
  );
  return response.data.map((post) => ({
    id: post?.id,
    ...post?.attributes,
    image: backendUrl + post?.attributes?.image?.data?.[0]?.attributes?.url,
    // image: post?.attributes?.image?.data?.[0]?.attributes?.url,
    user: {
      id: post?.attributes?.user?.data?.id,
      ...post?.attributes?.user?.data?.attributes,
    },
  }));
}

export async function loadPostsByMe() {
  return loadPosts(`filters[user][id][$eq]=${getUser().id}`);
}

/**
 *
 * @param {"likes" | "favors"} type
 * @returns
 */
export async function loadPostsLikedOrFavoredByMe(type = "likes") {
  const response = await request(
    `/api/users/me?populate[${type}][populate][0]=image`
  );
  console.log(response);
  return response[type].map((post) => ({
    ...post,
    image: post?.image?.[0].url,
  }));
}

export async function likePost(id) {
  const response = await request(`/api/posts/${id}/like`, {
    method: "PUT",
  });
  return response.data;
}

export async function favorPost(id) {
  const response = await request(`/api/posts/${id}/favor`, {
    method: "PUT",
  });
  return response.data;
}
