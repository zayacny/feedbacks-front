import axios from 'axios'

// saveUser  POST
const saveUser = async (oneFeedback) => {
  console.log('services/ saveUser()  ', oneFeedback.userName)
  const { data } = await axios.post('http://localhost:3000/feeduser', { name: oneFeedback.userName })
  console.log(data)
  return data
}
// additionFeedback POST
const additionFeedback = (oneFeedback) => {
  const { data } = axios.post('http://localhost:3000/feedbacks', { oneFeedback })
  console.log('services/ additionFeedback()', oneFeedback)
  return data
}
// getFeedbacks GET
// saveUserForm POST
// editUserForm PUT

export {
  saveUser,
  additionFeedback
}
