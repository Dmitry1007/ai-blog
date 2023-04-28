"use client";
import { useState } from "react";
import { FormattedPost } from "@/app/types";
import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";

type Props = {
    post: FormattedPost;
};

const Content = ({ post }: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>("");
    const [content, setContent] = useState<string>(post.content);
    const [contentError, setContentError] = useState<string>("");

    return (
        <div className="prose w-full max-w-full mb-10">
            {/* Breadcrumbs */}
            <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
            {/* Category and edit icon */}
            <div className="flex justify-between items-center">
                <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
                    {post.category}
                </h4>
                <div className="mt-4">
                    {isEditable ? (
                        <button onClick={() => setIsEditable(false)}>
                            <XMarkIcon className="h-6 w-6 text-accent-red" />
                        </button>
                    ) : (
                        <button onClick={() => setIsEditable(true)}>
                            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Content;
