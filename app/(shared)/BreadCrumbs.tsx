import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { PostWithAuthor } from "../types";

// const pages = [
//     { name: "Projects", href: "#", current: false },
//     { name: "Project Nero", href: "#", current: true },
// ];

type Props = {
    post: PostWithAuthor;
};

export default function BreadCrumbs({ post }: Props) {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol role="list" className="flex items-center space-x-4 list-none">
                <li>
                    <div>
                        <Link
                            href="/"
                            className="text-wh-300 hover:text-gray-500"
                        >
                            <HomeIcon
                                className="h-5 w-5 flex-shrink-0"
                                aria-hidden="true"
                            />
                            <span className="sr-only">Home</span>
                        </Link>
                    </div>
                </li>

                <li key={post.id}>
                    <div className="flex items-center">
                        <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        <Link
                            href=""
                            className="ml-4 text-sm font-medium text-wh-300 hover:text-gray-700 no-underline"
                        >
                            {post.category}
                        </Link>
                    </div>
                </li>

                <li key={post.id}>
                    <div className="flex items-center">
                        <ChevronRightIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400"
                            aria-hidden="true"
                        />
                        <Link
                            href={`/post/${post.id}`}
                            className="ml-4 text-sm font-medium text-wh-300 hover:text-gray-700 no-underline"
                        >
                            {post.title}
                        </Link>
                    </div>
                </li>
            </ol>
        </nav>
    );
}
