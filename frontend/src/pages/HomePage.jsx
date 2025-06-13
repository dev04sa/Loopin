// import { Box, Flex, Spinner } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import useShowToast from "../hooks/useShowToast";
// import Post from "../components/Post";
// import { useRecoilState } from "recoil";
// import postsAtom from "../atoms/postsAtom";
// import SuggestedUsers from "../components/SuggestedUsers";

// const HomePage = () => {
// 	const [posts, setPosts] = useRecoilState(postsAtom);
// 	const [loading, setLoading] = useState(true);
// 	const showToast = useShowToast();
// 	useEffect(() => {
// 		const getFeedPosts = async () => {
// 			setLoading(true);
// 			setPosts([]);
// 			try {
// 				const res = await fetch("/api/posts/feed");
// 				const data = await res.json();
// 				if (data.error) {
// 					showToast("Error", data.error, "error");
// 					return;
// 				}
// 				console.log(data);
// 				setPosts(data);
// 			} catch (error) {
// 				showToast("Error", error.message, "error");
// 			} finally {
// 				setLoading(false);
// 			}
// 		};
// 		getFeedPosts();
// 	}, [showToast, setPosts]);

// 	return (
// 		<Flex gap='10' alignItems={"flex-start"}>
// 			<Box flex={70}>
// 				{!loading && posts.length === 0 && <h1>Follow some users to see the feed</h1>}

// 				{loading && (
// 					<Flex justify='center'>
// 						<Spinner size='xl' />
// 					</Flex>
// 				)}

// 				{posts.map((post) => (
// 					<Post key={post._id} post={post} postedBy={post.postedBy} />
// 				))}
// 			</Box>
// 			<Box
// 				flex={30}
// 				display={{
// 					base: "none",
// 					md: "block",
// 				}}
// 			>
// 				<SuggestedUsers />
// 			</Box>
// 		</Flex>
// 	);
// };

// export default HomePage;

import { Box, Flex, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useShowToast from "../hooks/useShowToast";
import Post from "../components/Post";
import { useRecoilState } from "recoil";
import postsAtom from "../atoms/postsAtom";
import SuggestedUsers from "../components/SuggestedUsers";
import axios from "axios"; // ✅ Use Axios instead of fetch

const HomePage = () => {
  const [posts, setPosts] = useRecoilState(postsAtom);
  const [loading, setLoading] = useState(true);
  const showToast = useShowToast();

  // ✅ Fetch posts on component mount
  useEffect(() => {
    const getFeedPosts = async () => {
      setLoading(true);
      setPosts([]); // Clear posts while loading

      try {
        // ✅ Get token from localStorage
        const token = localStorage.getItem("user-threads");
        if (!token) {
          showToast("Error", "No token found, please log in.", "error");
          setLoading(false);
          return;
        }

        // ✅ Send request with token in Authorization header
        const res = await axios.get("/api/posts/feed", {
          headers: {
            Authorization: `Bearer ${token}`, // Attach token
          },
          withCredentials: true, // Send cookies if needed
        });

        // ✅ Check if data contains error
        if (res.data.error) {
          showToast("Error", res.data.error, "error");
        } else {
          console.log("Feed data:", res.data);
          setPosts(res.data);
        }
      } catch (error) {
        // ✅ Handle error properly
        showToast(
          "Error",
          error.response?.data?.message || "Failed to load posts",
          "error"
        );
      } finally {
        setLoading(false);
      }
    };

    getFeedPosts(); // Fetch posts on load
  }, [showToast, setPosts]);

  return (
    <Flex gap="10" alignItems={"flex-start"}>
      {/* Main Content - Posts */}
      <Box flex={70}>
        {/* ✅ Show message if no posts available */}
        {!loading && posts.length === 0 && (
          <h1>Follow some users to see the feed</h1>
        )}

        {/* ✅ Show loading spinner while fetching */}
        {loading && (
          <Flex justify="center">
            <Spinner size="xl" />
          </Flex>
        )}

        {/* ✅ Render posts */}
        {posts.map((post) => (
          <Post key={post._id} post={post} postedBy={post.postedBy} />
        ))}
      </Box>

      {/* Suggested Users (Only on Medium Screens and Above) */}
      <Box
        flex={30}
        display={{
          base: "none",
          md: "block",
        }}
      >
        <SuggestedUsers />
      </Box>
    </Flex>
  );
};

export default HomePage;

