import { XMarkIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { PostWithAuthor } from "@/app/types";
import { Editor } from "@tiptap/react";

import React from "react";

type Props = {
    post: PostWithAuthor;
    isEditable: boolean;
    handleIsEditable: (isEditable: boolean) => void;
    title: string;
    setTitle: (title: string) => void;
    tempTitle: string;
    setTempTitle: (tempTitle: string) => void;
    tempContent: string;
    setTempContent: (tempContent: string) => void;
    editor: Editor | null;
};

const Category = ({
    post,
    isEditable,
    handleIsEditable,
    title,
    setTitle,
    tempTitle,
    setTempTitle,
    tempContent,
    setTempContent,
    editor,
}: Props) => {
    return (
        <div className="flex justify-between items-center">
            <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
                {post.category}
            </h4>
            <div className="mt-4">
                {isEditable ? (
                    <button onClick={() => handleIsEditable(false)}>
                        <XMarkIcon className="h-6 w-6 text-accent-red" />
                    </button>
                ) : (
                    <button onClick={() => handleIsEditable(true)}>
                        <PencilSquareIcon className="h-6 w-6 text-accent-red" />
                    </button>
                )}
            </div>
        </div>
    );
};

export default Category;
