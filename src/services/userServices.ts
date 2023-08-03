import { and, collection, getDocs, or, query, where } from 'firebase/firestore';
import { firestore } from '@/lib/firebase';
import { User } from '@/types';

const USERS_COLLECTION_NAME = 'users';

export async function getUsers(searchTerm: string = ''): Promise<User[]> {
  const usersRef = collection(firestore, USERS_COLLECTION_NAME);
  const searchUsersQuery = query(
    usersRef,
    or(
      // query as-is:
      and(
        where('fullName', '>=', searchTerm),
        where('fullName', '<=', searchTerm + '\uf8ff')
      ),
      // capitalize first letter:
      and(
        where(
          'fullName',
          '>=',
          searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1)
        ),
        where(
          'fullName',
          '<=',
          searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1) + '\uf8ff'
        )
      ),
      // lowercase
      and(
        where('fullName', '>=', searchTerm.toLowerCase()),
        where('fullName', '<=', searchTerm.toLowerCase() + '\uf8ff')
      )
    )
  );
  const results = await getDocs(searchTerm ? searchUsersQuery : usersRef);
  return results.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as User[];
}
