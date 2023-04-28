import { Editor } from "@tiptap/react";

type Props = {
    editor: Editor | null;
};

const EditorMenuBar = ({ editor }: Props) => {
    if (!editor) {
        return null;
    }

    return (
        <div className="flex flex-wrap justify-start">
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                disabled={!editor.can().chain().focus().toggleBold().run()}
                className={
                    editor.isActive("bold")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                bold
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                disabled={!editor.can().chain().focus().toggleItalic().run()}
                className={
                    editor.isActive("italic")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                italic
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleStrike().run()}
                disabled={!editor.can().chain().focus().toggleStrike().run()}
                className={
                    editor.isActive("strike")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                strike
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCode().run()}
                disabled={!editor.can().chain().focus().toggleCode().run()}
                className={
                    editor.isActive("code")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                code
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={
                    editor.isActive("paragraph")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                paragraph
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={
                    editor.isActive("heading", { level: 1 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h1
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={
                    editor.isActive("heading", { level: 2 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h2
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 3 }).run()
                }
                className={
                    editor.isActive("heading", { level: 3 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h3
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 4 }).run()
                }
                className={
                    editor.isActive("heading", { level: 4 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h4
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 5 }).run()
                }
                className={
                    editor.isActive("heading", { level: 5 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h5
            </button>
            <button
                type="button"
                onClick={() =>
                    editor.chain().focus().toggleHeading({ level: 6 }).run()
                }
                className={
                    editor.isActive("heading", { level: 6 })
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                h6
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={
                    editor.isActive("bulletList")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                bullet list
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className={
                    editor.isActive("orderedList")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                ordered list
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className={
                    editor.isActive("codeBlock")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                code block
            </button>
            <button
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={
                    editor.isActive("blockquote")
                        ? "rounded bg-white px-2 py-1 text-xs font-semibold text-orange-200 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                        : "rounded bg-white px-2 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 m-1"
                }
            >
                blockquote
            </button>
        </div>
    );
};

export default EditorMenuBar;
