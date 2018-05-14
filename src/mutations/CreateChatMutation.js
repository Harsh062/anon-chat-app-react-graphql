// 1
import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../Environment';

// 2
const mutation = graphql`
  mutation CreateChatMutation($input: CreateChatInput!) {
    createChat(input: $input) {
      chat {
        id
        createdAt
        from
        content
      }
    }
  }
`

// 3
export default (from, content, callback) => {
  // 4
  const variables = {
    input: {
        from,
        content,
      clientMutationId: ""
    },
  }

  // 5
  commitMutation(
    environment,
    {
      mutation,
      variables,
      // 6
      onCompleted: () => {
        callback()
      },
      onError: err => console.error(err),
    },
  )
}
