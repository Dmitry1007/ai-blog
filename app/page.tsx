import FeaturedPosts from "app/(home)/FeaturedPosts";
import { prisma } from "app/api/client";

const getPosts = async () => {
    const posts = await prisma.post.findMany();
    return posts;
};

export default async function Home() {
    const posts = await getPosts();
    const featuredPosts = [posts[0], posts[3], posts[6]];

    return (
        <main className="">
            <FeaturedPosts featuredPosts={featuredPosts} />
        </main>
    );
}
