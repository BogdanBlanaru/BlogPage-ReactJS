import React, { useState, useEffect } from "react";
import "./Wishlist.css";
import { Container, Row, Button } from "reactstrap";

const Wishlist = () => {
	const [posts, setPosts] = useState([]);

	const onDelete = (id) => {
		const filteredArray = posts.filter((post) => {
			return post.id !== id;
		});
		setPosts(filteredArray);
		localStorage.setItem("postList", JSON.stringify(filteredArray));
	};

	useEffect(() => {
		const postListStorage = localStorage.getItem("postList");
		if (postListStorage) {
			const postArray = JSON.parse(postListStorage);
			setPosts(postArray);
		}
	}, []);

	return (
		<>
			<Container>
				<Row>
					{posts.map((post) => {
						return (
							<div className='table_row' key={"post_wishlist_" + post.id}>
								<h3>{post.title}</h3>
								<Button
									color='danger'
									onClick={() => {
										onDelete(post.id);
									}}>
									Sterge
								</Button>
							</div>
						);
					})}
				</Row>
			</Container>
		</>
	);
};

export default Wishlist;
