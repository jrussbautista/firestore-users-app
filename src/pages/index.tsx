import { useEffect, useState } from 'react';
import UserList from '@/components/UserList';
import { getUsers } from '@/services/userServices';
import { CommonError, User } from '@/types';
import SearchBar from '@/components/SearchBar';

function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    // fetch users on mount
    fetchUsers();
  }, []);

  async function fetchUsers(searchQuery: string = '') {
    try {
      setIsLoading(true);
      const results = await getUsers(searchQuery);
      setUsers(results);
    } catch (error) {
      const err = error as CommonError;
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function handleSearchSubmit() {
    // fetch users with search query
    fetchUsers(searchText);
  }

  function handleSearchChange(value: string) {
    setSearchText(value);
  }

  return (
    <main className="container mx-auto my-4">
      <h1 className="text-xl font-semibold mb-4">Users</h1>
      <SearchBar
        onChange={handleSearchChange}
        onSubmit={handleSearchSubmit}
        value={searchText}
      />
      {error ? <p>{error}</p> : null}
      {isLoading ? <p>Loading...</p> : <UserList users={users} />}
    </main>
  );
}
export default Home;
