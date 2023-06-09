import { prisma } from "@/app/api/client";
// import { PostWithAuthor } from "@/app/types";
import Content from "@/app/post/[id]/Content";

// revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

type Props = {
    params: { id: string };
};

const getPost = async (id: number) => {
    const post = await prisma.post.findUnique({
        where: { id },
        include: {
            author: true,
        },
    });
    if (!post) throw new Error("Post not found");

    // const formattedPost: PostWithAuthor = {
    //     ...post,
    //     author: post.author,
    // };

    return post;
};

export default async function Post({ params }: Props) {
    const { id } = params;
    const post = await getPost(Number(id));

    return (
        <main className="px-10 leading-7">
            <div className="md:flex gap-10 mb-5 justify-center">
                <div className="basis-3/4">
                    <Content post={post} />
                </div>
            </div>
        </main>
    );
}
