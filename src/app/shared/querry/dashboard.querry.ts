import gql from 'graphql-tag';

export const getUserById = gql`
  query getUserById($userId: String) {
    getUserById(userId: $userId) {
      status
      code
      data {
        accountNonExpired
        accountNonLocked
        active
        administrativeArea
        authorities {
          authority
        }
        checkNumber
        credentialsNonExpired
        departmentList {
          id
          name
          departmentCode
          medical
        }
        email
        enabled
        firstLogin
        id
        medicalStaff
        mobileNumber
        name
        nextAttemptAt
        numberOfAttempt
        roles {
          id
          name
          displayName
          description
          permissionList {
            id
            name
            description
            displayName
          }
          tilesList {
            id
            title
            colour
            icon
            link
          }
        }
        username
      }
    }
  }
`;
