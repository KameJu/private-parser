import { FC } from 'react'
import ITransaction from '../../types/transaction.interface'
import ListItem from './ListItem/ListItem'
import Row from '../ui/Grid/Row';

interface IList{
    data: ITransaction[];
}

const List: FC<IList> = ({data}) => {
	return (
		<Row className=''>
			{data?.map(item => (
				<ListItem key={item.balanceAfterTransaction} item={item}></ListItem>
			))}
		</Row>
	)
}

export default List
