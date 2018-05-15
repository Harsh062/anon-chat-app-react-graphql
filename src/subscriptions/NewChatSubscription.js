import {
    graphql,
    requestSubscription
  } from 'react-relay';
  import environment from '../Environment';
  
  const newChatSubscription = graphql`
    subscription NewChatSubscription {
      Chat {
        node {
          id
          from 
          createdAt
          content    
        }
      }
    }
  `
  
  // 3
  export default () => {
  
    const subscriptionConfig = {
      subscription: newChatSubscription,
      variables: {},
      updater: proxyStore => {
        // const createChatField = proxyStore.getRootField('Chat')
        // const newChat = createChatField.getLinkedRecord('node')
        // const updatedLink = newVote.getLinkedRecord('link')
        // const linkId = updatedLink.getValue('id')
        // const newVotes = updatedLink.getLinkedRecord('_votesMeta')
        // const newVoteCount = newVotes.getValue('count')
  
        // const link = proxyStore.get(linkId)
        // link.getLinkedRecord('votes').setValue(newVoteCount, 'count')
      },
      onError: error => console.log(`An error occured:`, error)
    }
  
    requestSubscription(
      environment,
      subscriptionConfig
    )
  
  }