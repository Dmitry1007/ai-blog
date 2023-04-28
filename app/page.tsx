import FeaturedPosts from "@/app/(home)/FeaturedPosts";
import { prisma } from "@/app/api/client";
import Header from "@/app/(shared)/Header";
import { PostWithAuthor } from "@/app/types";

// revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

export default async function Home() {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        },
    });

    const featuredPosts: PostWithAuthor[] = [posts[0], posts[3], posts[6]].map(
        (post) => ({
            ...post,
            author: post.author,
        })
    );

    return (
        <main className="">
            <Header />
            <FeaturedPosts featuredPosts={featuredPosts} />
        </main>
    );
}
