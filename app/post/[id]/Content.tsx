"use client";
import { useState } from "react";
import { PostWithAuthor } from "@/app/types";
import Image from "next/image";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Editor } from "@tiptap/react";
import Category from "./Category";
import Article from "./Article";

type Props = {
    post: PostWithAuthor;
};

const Content = ({ post }: Props) => {
    const [isEditable, setIsEditable] = useState<boolean>(false);

    const [title, setTitle] = useState<string>(post.title);
    const [titleError, setTitleError] = useState<string>("");
    const [tempTitle, setTempTitle] = useState<string>(post.title);

    const [content, setContent] = useState<string>(post.content);
    const [contentError, setContentError] = useState<string>("");
    const [tempContent, setTempContent] = useState<string>(post.content);

    const handleIsEditable = (bool: boolean) => {
        setIsEditable(bool);
        editor?.setEditable(bool);
    };

    const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (title) setTitleError("");
        setTitle(e.target.value);
    };

    const handleOnChangeContent = ({ editor }: any) => {
        if (!(editor as Editor).isEmpty) setContentError("");
        setContent((editor as Editor).getHTML());
    };

    const editor = useEditor({
        extensions: [StarterKit],
        content: content,
        editable: isEditable,
        onUpdate: handleOnChangeContent,
        editorProps: {
            attributes: {
                class: "prose prose-sm xl:prose-2xl leading-8 focus:outline-none w-full max-w-full",
            },
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // validation checks
        if (title === "") setTitleError("This field is required.");
        if (editor?.isEmpty) setContentError("This field is required.");
        if (title === "" || editor?.isEmpty) return;

        const response = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/post/${post?.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    title: title,
                    content: content,
                }),
            }
        );
        const data = await response.json();

        handleIsEditable(false);
        setTempTitle("");
        setTempContent("");

        setTitle(data.title);
        setContent(data.content);
        editor?.commands.setContent(data.content);
    };

    return (
        <div className="prose w-full max-w-full mb-10">
            {/* Breadcrumbs */}
            <h5 className="text-wh-300">{`Home > ${post.category} > ${post.title}`}</h5>
            {/* Category and edit icon */}
            <Category
                isEditable={isEditable}
                handleIsEditable={handleIsEditable}
                title={title}
                setTitle={setTitle}
                tempTitle={tempTitle}
                setTempTitle={setTempTitle}
                tempContent={tempContent}
                setTempContent={setTempContent}
                editor={editor}
                post={post}
            />
            <form onSubmit={handleSubmit}>
                {/* Header */}
                {isEditable ? (
                    <textarea
                        className="border-2 rounded-md bg-wh-50 p-3 w-full"
                        placeholder="Title"
                        value={title}
                        onChange={handleOnChangeTitle}
                    />
                ) : (
                    <h3 className="font-bold text-3xl mt-3">{title}</h3>
                )}
                <div className="flex gap-3">
                    {/* Author */}
                    <h5 className="font-semibold text-xs">
                        By {post.author.name}
                    </h5>
                    {/* Date */}
                    <h6 className="text-wh-300 text-xs">
                        {post.createdAt.toDateString()}
                    </h6>
                </div>
                {/* Image */}
                <div className="relative w-auto mt-2 mb-16 h-96">
                    <Image
                        fill
                        alt={post.title}
                        src={post.image}
                        sizes=""
                        style={{ objectFit: "cover" }}
                    />
                </div>
                {/* Content */}
                <Article
                    setContent={setContent}
                    contentError={contentError}
                    editor={editor}
                    isEditable={isEditable}
                    title={title}
                />

                {isEditable && (
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-accent-red hover:bg-wh-500 text-wh-10 font-semibold py-2 px-5 mt-5"
                        >
                            Submit
                        </button>
                    </div>
                )}
            </form>
        </div>
    );
};

export default Content;
