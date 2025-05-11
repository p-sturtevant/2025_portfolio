import React, { useEffect, useState } from 'react';

export const BlogPostList = () => {
	const [posts, setPosts] = useState([]);
	const rssFeedUrl = 'https://thievescant.pika.page/posts_feed';

	const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
		rssFeedUrl,
	)}&api_key=${import.meta.env.VITE_RSSJSON_API_KEY}`;

	useEffect(() => {
		const fetchRSS = async () => {
			try {
				const response = await fetch(proxyUrl);
				const data = await response.json();
				console.log(data);
				setPosts(data.items || []);
			} catch (error) {
				console.error('Error fetching RSS feed:', error);
			}
		};

		fetchRSS();
	}, []);

	return (
		<div className="mt-10">
			<h2 className="text-2xl font-bold">Latest Posts</h2>
			<ul>
				{posts.map((post, index) => (
					<li key={index} className="mt-2">
						<a
							href={post.link}
							target="_blank"
							rel="noopener noreferrer"
							className="text-blue-500 hover:underline"
						>
							{post.title}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};
