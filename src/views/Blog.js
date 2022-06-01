import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import { useState, useEffect } from "react";
import { addToWishlist } from "../Helpers";
import Footer from "../common/Footer";
import "./Blog.css";

function Blog() {
	const params = useParams();
	const [post, setPost] = useState(null);
	const [user, setUser] = useState(null);
	const [comments, setComments] = useState(null);

	const getBlog = async (blogId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/posts/" + blogId
		);
		const apiPost = await responseData.json();
		setPost(apiPost);
	};

	const getUser = async (userId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/users/" + userId
		);
		const apiUser = await responseData.json();
		setUser(apiUser);
	};

	const getComments = async (postId) => {
		const responseData = await fetch(
			"https://jsonplaceholder.typicode.com/comments?postId=" + postId
		);
		const apiComments = await responseData.json();
		setComments(apiComments);
	};

	useEffect(() => {
		if (params && params.blogId) {
			getBlog(params.blogId);
		}
	}, [params]);

	useEffect(() => {
		if (post && post.userId) {
			getUser(post.userId);
		}
		if (post && post.id) {
			getComments(post.id);
		}
	}, [post]);

	return (
		<>
			<Container className='mb-4'>
				{post && user ? (
					<>
						<Row>
							<img
								className='post_cover'
								src={`https://picsum.photos/seed/${post.id}/2000`}
							/>
						</Row>
						<Row>
							<h1>{post.title}</h1>
							<h3 style={{ minHeight: "500px" }}>{post.body}</h3>
							<Button
								className='mt-4 mb-4'
								onClick={() => {
									addToWishlist(post);
								}}>
								Add to wishlist!
							</Button>
						</Row>
						<Row>
							<div className='author_container mt-4'>
								<img src={`https://robohash.org/${user.id}.png?set=set4`} />
								<div className='mt-4'>
									<h3>{user.name}</h3>
									<h4>{user.email}</h4>
									<h4>{user.website}</h4>
									<h4>{user.phone}</h4>
								</div>
							</div>
						</Row>
					</>
				) : (
					<div>Loading...</div>
				)}
				{comments && (
					<>
						<h2 className='mt-4'>Comentarii:</h2>
						{comments.map((comment) => {
							return (
								<Row className='mt-2 p-2'>
									<h4>
										{comment.name} -- {comment.email}
									</h4>
									<p>{comment.body}</p>
								</Row>
							);
						})}
					</>
				)}
			</Container>
			<Footer />
		</>
	);
}

export default Blog;
