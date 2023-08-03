import { createUser } from '@/services/userServices';
import { faker } from '@faker-js/faker';

export async function seedUser(numOfUsers = 20) {
  let successCount = 0;
  const numbers = Array.from({ length: numOfUsers }, (_, i) => i + 1);
  await Promise.all(
    numbers.map(async () => {
      try {
        const firstName = faker.person.firstName();
        const lastName = faker.person.lastName();
        const fullName = `${firstName} ${lastName}`;
        await createUser({
          fullName,
          firstName,
          lastName,
        });
        successCount++;
      } catch (error) {
        console.log('error', error);
      }
    })
  );
  console.log(`${successCount} user's created`);
}

seedUser();
