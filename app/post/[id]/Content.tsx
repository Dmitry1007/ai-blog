"use client";
import { useState } from "react";
import { FormattedPost } from "@/app/types";

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
            Content Component
        </div>
    );
};

export default Content;
