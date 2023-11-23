import { FC, useEffect, useState } from 'react'
import ITransaction from '../../types/transaction.interface'
import List from '../List/List'

const Main: FC = () => {
	const [data, setData] = useState<ITransaction[]>()

	const fetchData = async () => {
		try {
			// Make a request to your API
			const response = await fetch('http://localhost:8080/', { method: 'GET' })

			// Parse the JSON data
			const result: ITransaction[] = await response.json()

			// Update the state with the fetched data
			setData(result)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	useEffect(() => {
		fetchData()
	})

	return (
		<div>
			<div>
				<List data={data} />
			</div>
		</div>
	)
}

export default Main
