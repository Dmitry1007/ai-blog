export default function Header() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Ai Powered Blog
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Generate blog posts using OpenAi API. No more beating
                        your head against the wall trying to come up with a blog
                        post idea.
                    </p>
                </div>
            </div>
        </div>
    );
}
