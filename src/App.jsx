
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { addGroup } from './redux/slices/groupSlices'
import { useState } from 'react'
import GroupPage from './pages/GroupPage/GroupPage'

function App() {

  // const allGroups = useSelector((state) => {
  //   return state.group.groups;
  // })

  // const errors = useSelector((state) => {
  //   return state.group.error;
  // })

  // const dispatch = useDispatch();

  // const [groupName, setGroupName] = useState("")
  // const handleInputChange = (event) => {
  //   setGroupName(event.target.value);
  // }

  // const submitGroupName = () => {
  //   console.log(groupName);
  //   dispatch(addGroup(groupName));
  //   setGroupName("");
  // }



  return (
    <>
      <GroupPage/>
    </>
  )
}

export default App


// {
//   id: 'group1',
//   name: 'Work',
//   displayPicture: 'WO',
//   createdAt: '2025-03-18T10:00:00Z',
// },

// {
//   id: 'note1',
//   groupId: 'group1', // Links to the group
//   content: 'Finish project',
//   createdAt: '2025-03-18T10:05:00Z',
//   updatedAt: '2025-03-18T10:05:00Z',
// },