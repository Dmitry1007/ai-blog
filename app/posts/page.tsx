import { prisma } from "app/api/client";
import Image from "next/image";

export default async function Posts() {
    const posts = await prisma.post.findMany({
        include: {
            author: true,
        },
    });

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:max-w-4xl">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        From the blog
                    </h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Learn how to grow your business using ai.
                    </p>
                    <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
                        {posts.map((post) => (
                            <article
                                key={post.id}
                                className="relative isolate flex flex-col gap-8 lg:flex-row"
                            >
                                <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                                    <Image
                                        src={post.image}
                                        alt=""
                                        className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                                        width={300}
                                        height={300}
                                    />
                                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                                </div>
                                <div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <time
                                            dateTime={post.createdAt.toDateString()}
                                            className="text-gray-500"
                                        >
                                            {post.createdAt.toDateString()}
                                        </time>
                                        <a
                                            href="#"
                                            className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                                        >
                                            {post.category}
                                        </a>
                                    </div>
                                    <div className="group relative max-w-xl">
                                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                            <a href="">
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 text-sm leading-6 text-gray-600">
                                            {post.snippet}
                                        </p>
                                    </div>
                                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                                        <div className="relative flex items-center gap-x-4">
                                            <Image
                                                src={post.author.avatar || ""}
                                                alt=""
                                                className="h-10 w-10 rounded-full bg-gray-50"
                                                width={32}
                                                height={32}
                                            />
                                            <div className="text-sm leading-6">
                                                <p className="font-semibold text-gray-900">
                                                    <a href="">
                                                        <span className="absolute inset-0" />
                                                        {post.author.name}
                                                    </a>
                                                </p>
                                                <p className="text-gray-600">
                                                    Author Role
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
