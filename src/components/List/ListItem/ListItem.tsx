import { FC } from 'react'
import ITransaction from '../../../types/transaction.interface'
import Column from '../../ui/Grid/Column'

interface IListItem {
	item: ITransaction
}

const ListItem: FC<IListItem> = ({ item }) => {
	return (
		<>
			<Column size={2}>{item.date} {item.time}</Column>
			<Column size={1}>{item.category}</Column>
			<Column size={2}>{item.card}</Column>
			<Column size={4}>{item.description}</Column>
			<Column size={1}>{item.sumCardCurrency}{item.cardCurrency}</Column>
			<Column size={1}>{item.sumTransactionCurrency}{item.transactionCurrency}</Column>
			<Column size={1}>{item.balanceAfterTransaction}{item.balanceCurrency}</Column>
		</>
	)
}

export default ListItem
