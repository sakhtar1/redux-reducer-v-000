

export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
<<<<<<< HEAD
      let newFriend = [...state.friends]
      newFriend.push(action.friend)
      return {friends: newFriend};
    case 'REMOVE_FRIEND':
      let oldFriend = [...state.friends]
      let indexFriend = oldFriend.findIndex(function(obj){
        return obj.id === action.id
      })
      oldFriend.splice(indexFriend, 1)
      return {friends: oldFriend}
    default:
      return state;
  }
=======
      return {friend: state.friend + 1}
    case 'REMOVE_FRIEND':
      return {count: state.friend - 1}
    default:
      return state;
  }
}
  
>>>>>>> 3bf535f160509d762c8fed9a3e88fa9655d5ab07
}
