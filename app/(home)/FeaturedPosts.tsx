import { Post, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

interface PostWithAuthor extends Post {
    author: User;
}

type Props = {
    featuredPosts: PostWithAuthor[];
};

export default function FeaturedPosts({ featuredPosts }: Props) {
    const formatDate = (date: string) => {
        return date.split(" ").slice(0, 3).join(" ");
    };

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8">
                <article className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg">
                    <time
                        dateTime={featuredPosts[0]?.createdAt.toString()}
                        className="block text-sm leading-6 text-gray-600"
                    >
                        {formatDate(featuredPosts[0]?.createdAt.toString())}
                    </time>
                    <h2
                        id="featured-post"
                        className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                    >
                        {featuredPosts[0]?.title}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        {featuredPosts[0]?.content}
                    </p>
                    <div className="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col">
                        <div className="flex">
                            <Link
                                href={`${process.env.NEXT_PUBLIC_URL}/post/${featuredPosts[0]?.id}`}
                                className="text-sm font-semibold leading-6 text-indigo-600"
                                aria-describedby="featured-post"
                            >
                                Continue reading{" "}
                                <span aria-hidden="true">&rarr;</span>
                            </Link>
                        </div>
                        <div className="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
                            <a
                                href="#"
                                className="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                            >
                                <Image
                                    src={featuredPosts[0]?.author.avatar ?? ""}
                                    alt=""
                                    className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                    width={24}
                                    height={24}
                                />
                                {featuredPosts[0]?.author.name}
                            </a>
                        </div>
                    </div>
                </article>
                <div className="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0">
                    <div className="-my-12 divide-y divide-gray-900/10">
                        {featuredPosts?.slice(1).map((post, index) => (
                            <article key={post.id} className="py-12">
                                <div className="group relative max-w-xl">
                                    <time
                                        dateTime={post.createdAt.toString()}
                                        className="block text-sm leading-6 text-gray-600"
                                    >
                                        {formatDate(post.createdAt.toString())}
                                    </time>
                                    <h2 className="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600">
                                        <Link
                                            href={`${process.env.NEXT_PUBLIC_URL}/post/${post.id}`}
                                        >
                                            <span className="absolute inset-0" />
                                            {post.title}
                                        </Link>
                                    </h2>
                                    <p className="mt-4 text-sm leading-6 text-gray-600">
                                        {post.content}
                                    </p>
                                </div>
                                <div className="mt-4 flex">
                                    <a
                                        href="#"
                                        className="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
                                    >
                                        <Image
                                            src={post.author.avatar ?? ""}
                                            alt=""
                                            className="h-6 w-6 flex-none rounded-full bg-gray-50"
                                            width={24}
                                            height={24}
                                        />
                                        {post.author.name}
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
