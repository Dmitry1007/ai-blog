import { prisma } from "app/api/client";

type Props = {
    params: { id: string };
};

const getPost = async (id: number) => {
    const post = await prisma.post.findUnique({
        where: { id },
    });
    if (!post) throw new Error("Post not found");
    return post;
};

export default async function ({ params }: Props) {
    const { id } = params;
    const post = await getPost(Number(id));
    return (
        <main className="px-10 leading-7">
            <div className="md:flex gap-10 mb-5">
                <div className="basis-3/4">Content</div>
                <div className="basis-1/4">SideBar</div>
            </div>
        </main>
    );
}
