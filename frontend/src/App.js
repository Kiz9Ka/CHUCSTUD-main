import { Route, Routes } from 'react-router-dom'
import Header from './pages/personalAccount/header/Header.jsx'
const App = () => {
	return (
			<Routes>
				<Route path='/' element={<Header />} />
			</Routes>
	)
}

export default App
