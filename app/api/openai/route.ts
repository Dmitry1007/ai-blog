import { NextResponse } from "next/server";
import { Configuration, CreateChatCompletionResponse, OpenAIApi } from "openai";
import { AxiosResponse } from "axios";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function POST(request: Request, response: any) {
    try {
        const { title, role } = await request.json();

        const aiResponse: AxiosResponse<CreateChatCompletionResponse, any> =
            await openai.createChatCompletion({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        // content: `Create small blog post with html tags based on this title: ${title}`,
                        content: `Create a 5 line blog post based on this title: ${title}. Do not return the title as part of the content.`,
                    },
                    {
                        role: "system",
                        content: `${role || "I am a helpful assistant"}`,
                    },
                ],
            });

        // On demand revalidation, won't work on Vercel
        // Vercel has a 5 second timeout for api calls?
        // response.revalidate("/api/posts")
        return NextResponse.json(
            {
                content: aiResponse.data.choices[0].message?.content,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("request error", error);
        NextResponse.json({ error: "error updating post" }, { status: 500 });
    }
}
