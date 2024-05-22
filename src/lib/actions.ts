"use server";
import { revalidatePath } from "next/cache";
import { baseURL } from "./utils";
interface LoginBody {
  name?: string;
  email: string;
  password: string;
  appType: string;
}
/*
	All the functions used to make fetch call are here.
*/
const projectID = "ktu17k7gadkn";

// User SignIn API

export async function userLogin(body: LoginBody) {
  try {
    const data = await fetch(
      "https://academics.newtonschool.co/api/v1/user/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectID as string,
        },
        body: JSON.stringify(body),
      }
    );
    const res = await data.json();
    console.log({ result: res });
    if (res?.message === "Incorrect EmailId or Password") {
      return { message: "fail" };
    }
    return res;
  } catch (error) {
    return { message: "fail" };
  }
}

// User SignUp API

export async function userSignUp(body: LoginBody) {
  try {
    const data = await fetch(
      "https://academics.newtonschool.co/api/v1/user/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectID as string,
        },
        body: JSON.stringify(body),
      }
    );
    const res = await data.json();

    return res;
  } catch (error) {
    throw error;
  }
}

// getting Post Array

export async function getAllPosts(jwt: string, page: number) {
  try {
    const response = await fetch(
      `${baseURL}/post?limit=10&page=${page}&sort={"createdAt" : -1}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    const data = await response.json();
    if (data?.status === "fail") {
      throw new Error(data?.message);
    } else {
      return data;
    }
  } catch (error) {
    throw error;
  }
}

export async function likePost(
  jwt: string,
  postID: string,
  method: "POST" | "DELETE"
) {
  try {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/like/${postID}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    console.log({ res });
    if (res.status === "success") return { message: "success" };
    else throw Error("failed");
  } catch (error) {
    return { message: "error" };
  }
}

export async function createAPost(jwt: string, formData: FormData) {
  try {
    const data = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/post/",
      {
        method: "POST",
        body: formData,
        headers: {
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    if (res.status === "success") {
      revalidatePath("/")
      return { message: "success", id: res.data._id };
    }
    return { message: "fail" };
  } catch (error) {
    return { message: "error" };
  }
}

export async function deletePost(jwt: string, postID: string) {
  try {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/post/${postID}`,
      {
        method: "DELETE",
        headers: {
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    revalidatePath("/")
    return res;
  } catch (error) {
    return { message: "success" };
  }
}

export async function editAPost(jwt: string, formData: FormData, id: string) {
  try {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/post/${id}`,
      {
        method: "PATCH",
        body: formData,
        headers: {
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    if (res.status === "success") {
      revalidatePath("/")
      return { message: "success", id: res.data._id };
    }
    return { message: "fail" };
  } catch (error) {
    return { message: "error" };
  }
}

export async function postAComment(
  jwt: string,
  postid: string,
  comment: string
) {
  try {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/comment/${postid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({ content: comment }),
      }
    );
    const res = await data.json();
    if (res.status === "success") {
      revalidatePath("/")
      return { message: "success" };
    }

    return { message: res?.message };
  } catch (error) {
    return { message: "error" };
  }
}

export async function deleteComment(jwt: string, commentId: string) {
  try {
    const res = await fetch(
      `https://academics.newtonschool.co/api/v1/quora/comment/${commentId}`,
      {
        method: "DELETE",
        headers: {
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    if (res.status === 204) {
      revalidatePath("/")
      revalidatePath("/post/[id]")
      return { message: "success" };
    } else {
      return { message: "error" };
    }
  } catch (error) {
    return { message: "error" };
  }
}

export async function followUser(
  jwt: string,
  userID: string,
  method: "POST" | "DELETE"
) {
  try {
    const data = await fetch(
      `https://academics.newtonschool.co/api/v1/facebook/follow/${userID}`,
      {
        method: method,
        headers: {
          "Content-Type": "application/json",
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    return res;
  } catch (error) {
    return { message: "error" };
  }
}

export async function createAPage(jwt: string, formData: FormData) {
  try {
    const data = await fetch(
      "https://academics.newtonschool.co/api/v1/facebook/channel/",
      {
        method: "POST",
        body: formData,
        headers: {
          projectID: projectID,
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    const res = await data.json();
    return res;
    // if(res)
  } catch (error) {
    return error;
  }
}

// export async function getChannelData(id) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/facebook/channel/${id}`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success")
// 			return { data: res.data, message: "success" };
// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }

// export async function getChannelPosts(id) {
// 	try {
// 		const data = await fetch(
// 			"https://academics.newtonschool.co/api/v1/quora/post?limit=10000",
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		const posts = res.data.filter((item) => {
// 			return item.channel && item.channel._id === id;
// 		});

// 		return { message: "success", posts };
// 	} catch (error) {
// 		console.log(error.message);
// 		return { message: "error" };
// 	}
// }

// export async function editASpace(jwt, channelID, formData) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/channel/${channelID}`,
// 			{
// 				method: "PATCH",
// 				body: formData,
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success") return { message: "success" };
// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }
// export async function deleteASpace(jwt, channelID) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/channel/${channelID}`,
// 			{
// 				method: "DELETE",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);

// 		return { message: "success" };
// 	} catch (error) {
// 		return { message: "fail" };
// 	}
// }
// export async function getSpaces() {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/channel?limit=1000`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success") {
// 			return { message: "success", data: res.data };
// 		}
// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }
// export async function getComments(jwt, postID) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/post/${postID}/comments`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success") {
// 			return { message: "success", data: res.data };
// 		}
// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }
// export async function getUserNameAndProfile(jwt, uid) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/user/${uid}`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success") {
// 			return {
// 				message: "success",
// 				data: {
// 					_id: res.data._id,
// 					name: res.data.name,
// 					profileImage: res.data.profileImage,
// 				},
// 			};
// 		}

// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }

// export async function editComment(jwt, commentID, comment) {
// 	try {
// 		const data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/comment/${commentID}`,
// 			{
// 				method: "PATCH",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 				body: JSON.stringify({ content: comment }),
// 			}
// 		);
// 		const res = await data.json();
// 		if (res.status === "success") {
// 			return { message: "success" };
// 		}
// 		return { message: "fail" };
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }

// export async function searchData(jwt, query, limited = false) {
// 	let result = {};
// 	try {
// 		let data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/post?search={"title":"${query}","content":"${query}"}&limit=${
// 				limited ? 5 : 1000
// 			}`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);
// 		let res = await data.json();
// 		if (res.status === "success") {
// 			result.posts = res.data;
// 		}
// 		data = await fetch(
// 			`https://academics.newtonschool.co/api/v1/quora/user/?search={"name":"${query}"}&limit=${
// 				limited ? 5 : 1000
// 			}`,
// 			{
// 				method: "GET",
// 				headers: {
// 					projectID: projectID,
// 					Authorization: `Bearer ${jwt}`,
// 				},
// 			}
// 		);
// 		res = await data.json();
// 		if (res.status === "success") {
// 			result.users = res.data;
// 		}
// 		result.message = "success";
// 		return result;
// 	} catch (error) {
// 		return { message: "error" };
// 	}
// }
