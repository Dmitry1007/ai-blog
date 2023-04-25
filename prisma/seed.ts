import { PrismaClient, Role } from "@prisma/client";

const prisma = new PrismaClient();
// const prisma: any = new PrismaClient();

async function main(): Promise<void> {
    console.log("Start seeding ...");
    // Create three users
    const adminUser = await prisma.user.create({
        data: {
            email: "Cook@example.com",
            name: "Tom Cook",
            role: Role.ADMIN,
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    });

    const regularUser1 = await prisma.user.create({
        data: {
            email: "Foster@example.com",
            name: "Michael Foster",
            role: Role.USER,
            avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    });

    const regularUser2 = await prisma.user.create({
        data: {
            email: "Walton@example.com",
            name: "Lindsay Walton",
            role: Role.USER,
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
        },
    });

    // Create three posts for each user, each post with a different category
    const users = [adminUser, regularUser1, regularUser2];
    const categories = ["Company News", "Tech", "Robotics", "Business"];

    for (const user of users) {
        for (let i = 0; i < 3; i++) {
            await prisma.post.create({
                data: {
                    title: `AI Post ${i + 1} by ${user.name}`,
                    category: categories[i],
                    content: `This is the content of AI Post ${
                        i + 1
                    } Libero neque aenean tincidunt nec consequat tempor. Viverra odio id velit adipiscing id. Nisi vestibulum orci eget bibendum dictum. Velit viverra posuere vulputate volutpat nunc. Nunc netus sit faucibus. by ${
                        user.name
                    } in the ${categories[i]} category.`,
                    snippet: `Snippet of AI Post ${i + 1} by ${
                        user.name
                    } in the ${categories[i]} category.`,
                    image: `https://example.com/image/ai-post-${i + 1}-by-${
                        user.name
                    }.jpg`,
                    author: {
                        connect: {
                            id: user.id,
                        },
                    },
                },
            });
        }
    }
    console.log("Seeding finished.");
}

main()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
