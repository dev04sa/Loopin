// import { Box, Flex, Skeleton, SkeletonCircle, Text } from "@chakra-ui/react";
// import { useEffect, useState } from "react";
// import SuggestedUser from "./SuggestedUser";
// import useShowToast from "../hooks/useShowToast";

// const SuggestedUsers = () => {
// 	const [loading, setLoading] = useState(true);
// 	const [suggestedUsers, setSuggestedUsers] = useState([]);
// 	const showToast = useShowToast();

// 	useEffect(() => {
// 		const getSuggestedUsers = async () => {
// 			setLoading(true);
// 			try {
// 				const res = await fetch("/api/users/suggested");
// 				const data = await res.json();
// 				if (data.error) {
// 					showToast("Error", data.error, "error");
// 					return;
// 				}
// 				setSuggestedUsers(data);
// 			} catch (error) {
// 				showToast("Error", error.message, "error");
// 			} finally {
// 				setLoading(false);
// 			}
// 		};

// 		getSuggestedUsers();
// 	}, [showToast]);

// 	return (
// 		<>
// 			<Text mb={4} fontWeight={"bold"}>
// 				Suggested Users
// 			</Text>
// 			<Flex direction={"column"} gap={4}>
// 				{!loading && suggestedUsers.map((user) => <SuggestedUser key={user._id} user={user} />)}
// 				{loading &&
// 					[0, 1, 2, 3, 4].map((_, idx) => (
// 						<Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}>
// 							{/* avatar skeleton */}
// 							<Box>
// 								<SkeletonCircle size={"10"} />
// 							</Box>
// 							{/* username and fullname skeleton */}
// 							<Flex w={"full"} flexDirection={"column"} gap={2}>
// 								<Skeleton h={"8px"} w={"80px"} />
// 								<Skeleton h={"8px"} w={"90px"} />
// 							</Flex>
// 							{/* follow button skeleton */}
// 							<Flex>
// 								<Skeleton h={"20px"} w={"60px"} />
// 							</Flex>
// 						</Flex>
// 					))}
// 			</Flex>
// 		</>
// 	);
// };

// export default SuggestedUsers;

// // Loading skeletons for suggested users, if u want to copy and paste as shown in the tutorial

// // <Flex key={idx} gap={2} alignItems={"center"} p={"1"} borderRadius={"md"}>
// // 							{/* avatar skeleton */}
// // 							<Box>
// // 								<SkeletonCircle size={"10"} />
// // 							</Box>
// // 							{/* username and fullname skeleton */}
// // 							<Flex w={"full"} flexDirection={"column"} gap={2}>
// // 								<Skeleton h={"8px"} w={"80px"} />
// // 								<Skeleton h={"8px"} w={"90px"} />
// // 							</Flex>
// // 							{/* follow button skeleton */}
// // 							<Flex>
// // 								<Skeleton h={"20px"} w={"60px"} />
// // 							</Flex>
// // 						</Flex>




import {
	Box,
	Flex,
	Skeleton,
	SkeletonCircle,
	Text,
	useColorModeValue, // ✅ Correctly imported here
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import SuggestedUser from "./SuggestedUser";
import useShowToast from "../hooks/useShowToast";

const SuggestedUsers = () => {
	const [loading, setLoading] = useState(true); // Loading state
	const [suggestedUsers, setSuggestedUsers] = useState([]); // Suggested users array
	const showToast = useShowToast(); // Show toast for errors

	// Fetch suggested users on component mount
	useEffect(() => {
		const getSuggestedUsers = async () => {
			setLoading(true); // Start loading before API call
			try {
				const res = await fetch("/api/users/suggested");

				// Check for a valid response
				if (!res.ok) {
					throw new Error(`Error ${res.status}: Failed to fetch suggested users`);
				}

				const data = await res.json();

				// Check if data is an array and not null/undefined
				if (Array.isArray(data) && data.length > 0) {
					setSuggestedUsers(data);
				} else {
					showToast("Error", "No suggested users available.", "error");
					setSuggestedUsers([]);
				}
			} catch (error) {
				showToast("Error", error.message || "Failed to fetch users", "error");
				setSuggestedUsers([]); // Set empty array in case of error
			} finally {
				setLoading(false); // Stop loading after API call
			}
		};

		getSuggestedUsers(); // Call API function
	}, []); // Empty dependency to prevent unnecessary re-renders

	return (
		<>
			{/* Title */}
			<Text mb={4} fontWeight={"bold"}>
				Suggested Users
			</Text>

			{/* Suggested Users List */}
			<Flex direction={"column"} gap={4}>
				{/* Show users if available */}
				{!loading && Array.isArray(suggestedUsers) && suggestedUsers.length > 0 ? (
					suggestedUsers.map((user) => (
						<SuggestedUser key={user._id} user={user} />
					))
				) : (
					!loading && <Text>No suggested users found.</Text>
				)}

				{/* Show loading skeletons while fetching */}
				{loading &&
					Array.from({ length: 5 }).map((_, idx) => (
						<Flex
							key={idx}
							gap={2}
							alignItems={"center"}
							p={"2"}
							borderRadius={"md"}
							bg={useColorModeValue("gray.100", "gray.700")} // ✅ Correctly using useColorModeValue here
						>
							{/* Avatar Skeleton */}
							<Box>
								<SkeletonCircle size={"10"} />
							</Box>

							{/* Username and Fullname Skeleton */}
							<Flex w={"full"} flexDirection={"column"} gap={2}>
								<Skeleton h={"8px"} w={"80px"} />
								<Skeleton h={"8px"} w={"90px"} />
							</Flex>

							{/* Follow Button Skeleton */}
							<Flex>
								<Skeleton h={"20px"} w={"60px"} />
							</Flex>
						</Flex>
					))}
			</Flex>
		</>
	);
};

export default SuggestedUsers;
