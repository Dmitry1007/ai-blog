import FeaturedPosts from "@/app/(home)/FeaturedPosts";
import { prisma } from "@/app/api/client";
import Header from "@/app/(shared)/Header";
import { Post, User } from "@prisma/client";

// revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

interface PostWithAuthor extends Post {
    author: User;
}

export default async function Home() {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        },
    });

    const featuredPosts: PostWithAuthor[] = [posts[0], posts[3], posts[6]].map(
        (post) => ({
            ...post,
            author: post.author as User,
        })
    );

    return (
        <main className="">
            <Header />
            <FeaturedPosts featuredPosts={featuredPosts} />
        </main>
    );
}
