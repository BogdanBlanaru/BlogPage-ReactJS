export const addToWishlist = (post) => {
	const postListStorage = localStorage.getItem("postList");
	if (postListStorage === null) {
		const postList = [];
		postList.push(post);
		localStorage.setItem("postList", JSON.stringify(postList));
	} else {
		const storageArray = JSON.parse(postListStorage);
		if (
			!storageArray.find((postStorage) => {
				return postStorage.id === post.id;
			})
		) {
			storageArray.push(post);
			localStorage.setItem("postList", JSON.stringify(storageArray));
		}
	}
};
