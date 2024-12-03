import User, {getRandomAvatar, UserRole } from "@/context/user/User";

let SAMPLE_USERS: User[] = []; // Initialize as an empty array

/**
 * Fetch users from API and cache them in SAMPLE_USERS
 */
async function fetchUsers(): Promise<User[]> {
    if (SAMPLE_USERS.length > 0) {
        // Return cached users if already fetched
        return SAMPLE_USERS;
    }

    try {
        const response = await fetch("http://localhost:8000/api/users"); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        // Transform API response into User objects
        SAMPLE_USERS = data.users.map((user: any) => ({
            uuid: user.id.toString(), // Map `id` to `uuid` as a string
            firstName: user.name.split(" ")[0], // Extract first name from `name`
            lastName: user.name.split(" ")[1] || "", // Extract last name or set as empty string
            address: "Unknown", // Address not provided in API, defaulting
            avatar: getRandomAvatar(), // Avatar can be dynamically generated or fetched
            email: user.email, // Map `email` directly
            phoneNumber: "Unknown", // Phone number not in API, defaulting
            userRole: user.role === "admin" ? UserRole.ADMIN : UserRole.USER, // Map `role` to `userRole`
        }));
        return SAMPLE_USERS;
    } catch (error) {
        console.error("Error fetching users:", error);
        return []; // Return an empty array in case of an error
    }
}

/**
 * Get user by name
 * @deprecated This uses linear search; replace with a better implementation if needed.
 */
export async function getUserByName(name: string): Promise<User | undefined> {
    const users = await fetchUsers();
    return users.find(user => `${user.firstName} ${user.lastName}` === name);
}

/**
 * Get user by UUID
 */
export async function getUserByID(uuid: string): Promise<User | undefined> {
  try {
      const response = await fetch(`http://localhost:8000/api/users/${uuid}`, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });

      if (!response.ok) {
          throw new Error(`Error fetching user: ${response.statusText}`);
      }

      const data = await response.json();

      // Assuming the response has a 'user' property
      return data.user as User;
  } catch (error) {
      console.error('Failed to fetch user:', error);
      return undefined;
  }
}

/**
 * Get paginated users
 */
export async function getAllUsersByPage(page: number, size: number): Promise<User[]> {
    const users = await fetchUsers();
    const start = (page - 1) * size;
    const end = page * size;
    return users.slice(start, end);
}

/**
 * Get all users
 */
export async function getAllUsers(): Promise<User[]> {
    return fetchUsers();
}

/**
 * Get the number of pages
 */
export async function getPageSize(size: number): Promise<number> {
    const users = await fetchUsers();
    return Math.ceil(users.length / size);
}