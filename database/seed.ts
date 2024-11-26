import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create 4 users with tasks
  const users = await Promise.all(
    Array.from({ length: 4 }).map(async (_, i) => {
      const user = await prisma.user.create({
        data: {
          username: `user${i + 1}`,
          role: i % 2 === 0 ? 'USER' : 'AMD',
          tasks: {
            create: Array.from({ length: Math.floor(Math.random() * 5) + 1 }).map((_, j) => ({
              title: `Task ${j + 1} for user${i + 1}`,
              done: Math.random() < 0.5, // Randomly set tasks as done or not
            })),
          },
        },
        include: { tasks: true },
      });
      return user;
    })
  );

  console.log('Seeded users with tasks:', users);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
