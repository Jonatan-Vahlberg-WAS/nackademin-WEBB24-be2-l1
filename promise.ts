console.log("Promises");

type Options = {
    _limit?: number,
    _start?: number,
    userId?: number
}

function buildFetch(uri: string = "", options?: Options) {
  const baseUrl = "https://jsonplaceholder.typicode.com";
  const url = new URL(`${baseUrl}/${uri}`)
  if(options?._limit){
      url.searchParams.append("_limit", options._limit.toString())
  }
  if(options?._start){
      url.searchParams.append("_start", options._start.toString())
  }
  if(options?.userId){
      url.searchParams.append("userId", options.userId.toString())
  }
  return fetch(url, {
    headers: {
      "content-type": "application/json",
    },
  });
}

async function fetchPosts(options?: Options): Promise<Post[]> {
  try {
    const response = await buildFetch("/posts/", options);
    const posts: Post[] = await response.json();
    return posts;
  } catch (error: any) {
    return [];
  }
}

async function fetchPost(id: number): Promise<Post | null> {
  try {
    const response = await buildFetch(`/posts/${id}`);
    if (!response.ok) {
      throw new Error("Post not found");
    }
    const post: Post = await response.json();
    return post;
  } catch (error: any) {
    return null;
  }
}

async function run(): Promise<void> {
  const postsPage1 = await fetchPosts({
    _limit: 5,
    _start: 0
  });
  const postsPage2 = await fetchPosts({
    _limit: 5,
    _start: 5
  });
    console.log("page 1:", postsPage1);
    console.log("page 2:", postsPage2);
  const post = await fetchPost(9);
  if (!post) {
    console.log("Post not found");
  } else {
    console.log("Post: ", post);
  }
}

run();
