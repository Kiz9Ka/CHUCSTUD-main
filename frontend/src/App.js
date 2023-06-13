import { Route, Routes } from 'react-router-dom'
import Main from './pages/main/Main.jsx'
import PersonalAccount from './pages/personalAccount/PersonalAccount.jsx'
const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Main />} />
			<Route path='/personalAccount' element={<PersonalAccount />} />
		</Routes>
	)
}

export default App
