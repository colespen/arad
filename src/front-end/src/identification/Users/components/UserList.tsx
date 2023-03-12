import React, { useEffect } from "react";
import { Input, Table, Tbody, Td, Tr } from "@chakra-ui/react";

import { 
  Role, 
  // User 
} from "../../../api/types/friendly";

import { MockUser } from "../../../mock-data-util/mock-interface";

import { UserListRow } from "./UserListRow";
import { Paginator } from "../../../components/Paginator";

interface UserListProps {
  // ** User
  users: MockUser[];
  roles: Role[];
  filterText: string;
  setFilterText: Function;
  page: number;
  setPage: Function;
  totalPages: number;
}

const UserList = (props: UserListProps) => {
  const { users, roles, filterText, setFilterText, page, setPage, totalPages } =
    props;
  const [currentTimer, setCurrentTimer] = React.useState<NodeJS.Timeout | null>(
    null
  );
  const [filteredUsers, setFilteredUsers] = React.useState<MockUser[]>([]);

  /// ********* ///

  useEffect(() => {
    const filtered = users.filter((user) => 
      user.email.includes(filterText) 
    )
    setFilteredUsers(filtered)
  }, [users, filterText])


  const delayFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (currentTimer) {
      clearTimeout(currentTimer);
    }

    const timer = setTimeout(() => {
      setFilterText(event.target.value);
      setPage(1);
      setCurrentTimer(null);
    }, 666);

    setCurrentTimer(timer);
  };

  /// ********* ///



  return (
    <Paginator page={page} totalPages={totalPages} setPage={setPage}>
      <Table id="users-list">
        <Tbody>
          <Tr>
            <Td key="email-filter">
              <Input
                autoFocus
                id="users-filter"
                borderRadius="lg"
                focusBorderColor="black"
                defaultValue={filterText}
                placeholder="email filter"
                onChange={delayFilterChange}
              />
            </Td>
            {roles.map((role) => {
              return <Td key={role}>{role}</Td>;
            })}
          </Tr>
          {filteredUsers.map((user) => {
            const rowKey = `users-row-${user.id}`;
            return <UserListRow key={rowKey} user={user} roles={roles} />;
          })}
        </Tbody>
      </Table>
    </Paginator>
  );
};

export { UserList };
