import EditorMenuBar from "./EditorMenuBar";
import { EditorContent, Editor } from "@tiptap/react";

type Props = {
    setContent: (content: string) => void;
    contentError: string;
    editor: Editor | null;
    isEditable: boolean;
    title: string;
};

const Article = ({
    setContent,
    contentError,
    editor,
    isEditable,
    title,
}: Props) => {
    if (!editor) return null;
    return (
        <article className="text-wh-500 leading-8">
            <div
                className={
                    isEditable
                        ? "border-2 rounded-md bg-wh-50 p-3"
                        : "w-full max-w-full"
                }
            >
                {isEditable && <EditorMenuBar editor={editor} />}
                <EditorContent editor={editor} />
            </div>
            {contentError && <p className="mt-1 text-wh-900">{contentError}</p>}
        </article>
    );
};

export default Article;
