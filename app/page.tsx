import FeaturedPosts from "app/(home)/FeaturedPosts";
import { prisma } from "app/api/client";
import { Post } from "@prisma/client";
import Header from "app/(shared)/Header";

// revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

const getPosts = async () => {
    const posts = await prisma.post.findMany();
    return posts;
};

// function that takes in an array of posts and returns an array of authors
const getPostAuthors = async (posts: Array<Post>) => {
    const authors = await prisma.user.findMany({
        where: { id: { in: posts.map((post) => post.authorId) } },
    });
    return authors;
};

export default async function Home() {
    const posts = await getPosts();
    const featuredPosts = [posts[0], posts[3], posts[6]];
    const authors = await getPostAuthors(featuredPosts);

    return (
        <main className="">
            <Header />
            <FeaturedPosts
                featuredPosts={featuredPosts}
                postAuthors={authors}
            />
        </main>
    );
}
