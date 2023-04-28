import { prisma } from "@/app/api/client";
import { Post as PostType } from "@prisma/client";
import { FormattedPost } from "@/app/types";
import Content from "./Content";

// revalidate every 300 seconds (5 minutes)
export const revalidate = 300;

type Props = {
    params: { id: string };
};

const getPost = async (id: number) => {
    const post: PostType | null = await prisma.post.findUnique({
        where: { id },
    });
    if (!post) throw new Error("Post not found");

    const formattedPost = {
        ...post,
        createdAt: post.createdAt.toISOString(),
        updatedAt: post.updatedAt.toISOString(),
    };

    return formattedPost;
};

export default async function ({ params }: Props) {
    const { id } = params;
    const post: FormattedPost | null = await getPost(Number(id));
    return (
        <main className="px-10 leading-7">
            <div className="md:flex gap-10 mb-5">
                <div className="basis-3/4">
                    <Content post={post} />
                </div>
                <div className="basis-1/4">SideBar</div>
            </div>
        </main>
    );
}
