import pdfjs from 'pdfjs-dist/webpack' 
import banks from './banks.json'

async function loadText(path) {
  let text_list = []
  const pdf = await pdfjs.getDocument(path).promise
  const numPages = pdf._pdfInfo.numPages
  for (let i = 1; i <= numPages; i++) {
    const page = await pdf.getPage(i)
    const text = await page.getTextContent()
    text_list.push(...text.items)
  }
  text_list = text_list.map(x => x.str)
  console.log(text_list)
  return text_list
}

function loadCreditCard(text, bank) {
  const card = {}
  const name = text[bank.card_name].split(' ')
  const len = name.length
  card.network = name[len-1].toUpperCase()
  card.name = name.splice(0,len-1).join(' ')
  card.bank = bank.bank
  return card
}

function loadAccountStatement(text, bank) {
  const account_statement = {}
  const indexCurrency = text.indexOf(bank.textCurrency) + 1
  const currency = text[indexCurrency].split(' ')[0]
  account_statement.currency = currency
  const indexDate = text.indexOf(bank.textDate) - 1
  const date = text[indexDate].split('/')
  account_statement.date = { month: parseInt(date[1]), year: parseInt(date[2]) }
  return account_statement
}

function loadTransactions(text, bank) {
  let transactions = []
  const regex = /\d{2}\/\d{2}\/\d{2}/
  const len = text.length
  const number = text[bank.card_number]
  const text_start = bank.transaction_start+number
  const transactionIndex = text.indexOf(text_start) + 2
  const transactionEnd = text.indexOf(bank.transaction_end)
  let city = false
  let a = true
  for (let i = transactionIndex; i < transactionEnd ; i += (5+city)) {
    
    if (text[i] === bank.page_end) {
      const rest = text.slice(i,len)
      i += rest.indexOf(bank.page_begin) + 3 
      if (a == true) {
        a = false
      } else {
        break
      }
    }
    city = regex.test(text[i+6])
    
    let transaction = {}
    transaction.amount = parseFloat(text[i+1].replace(',','.'))
    transaction.audited = false
    transaction.avoidable = false
    transaction.category = null
    transaction.date = text[i]
    transaction.premium = false
    transaction.recurring = false
    transaction.statement_description = text[i+3+city]
    transaction.user_description = null
    transactions.push(transaction)
    
  }
  return transactions
}

export async function parseStatement(path) {
  const text = await loadText(path)
  const bank = banks['SANTANDER']
  const credit_card = loadCreditCard(text, bank)
  const account_statement = loadAccountStatement(text, bank)
  const transactions = loadTransactions(text, bank)
  return {credit_card: credit_card, account_statement: account_statement, transactions: transactions}
}

