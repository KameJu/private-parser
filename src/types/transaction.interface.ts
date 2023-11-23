export default interface ITransaction {
	date: string
	time: string
	category: string
	card: string
	description: string
	sumCardCurrency: string
	cardCurrency: string
	sumTransactionCurrency: string
	transactionCurrency: string
	balanceAfterTransaction: string
	balanceCurrency: string
}
