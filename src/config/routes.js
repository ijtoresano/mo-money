/* eslint-disable react/jsx-key */
import React from 'react'
import RestrictedRoute from 'rmw-shell/lib/containers/RestrictedRoute'
import makeLoadable from 'rmw-shell/lib/containers/MyLoadable'
import AdminRoute from '../lib/Admin/AdminRoute'

const MyLoadable = (opts, preloadComponents) =>
  makeLoadable({ ...opts, firebase: () => import('./firebase') }, preloadComponents)

const AsyncAbout = MyLoadable({ loader: () => import('../pages/About') })

// ADMIN PAGES
const AsyncAdminDashboard = MyLoadable({ loader: () => import('../pages/Admin/Dashboard') })
const AsyncAdminCompany = MyLoadable({ loader: () => import('../pages/Admin/Companies/Company') })
const AsyncAdminCompanies = MyLoadable({ loader: () => import('../pages/Admin/Companies/Companies') }, [AsyncAdminCompany])
const AsyncAdminTask = MyLoadable({ loader: () => import('../pages/Admin/Tasks/Task') })
const AsyncAdminTasks = MyLoadable({ loader: () => import('../pages/Admin/Tasks/Tasks') }, [AsyncAdminTask])
const AsyncAdminCreditCard = MyLoadable({ loader: () => import('../pages/Admin/CreditCards/CreditCard') })
const AsyncAdminCreditCards = MyLoadable({ loader: () => import('../pages/Admin/CreditCards/CreditCards') }, [AsyncAdminCreditCard])
const AsyncAdminAccountStatement = MyLoadable({ loader: () => import('../pages/Admin/AccountStatements/AccountStatement') })
const AsyncAdminAccountStatements = MyLoadable({ loader: () => import('../pages/Admin/AccountStatements/AccountStatements') }, [AsyncAdminAccountStatement])
const AsyncAdminTransaction = MyLoadable({ loader: () => import('../pages/Admin/Transactions/Transaction') })
const AsyncAdminTransactions = MyLoadable({ loader: () => import('../pages/Admin/Transactions/Transactions') }, [AsyncAdminTransaction])
const AsyncAdminCategory = MyLoadable({ loader: () => import('../pages/Admin/Categories/Category') })
const AsyncAdminCategories = MyLoadable({ loader: () => import('../pages/Admin/Categories/Categories') }, [AsyncAdminCategory])
const AsyncAdminTransactionDescritpion = MyLoadable({ loader: () => import('../pages/Admin/TransactionDescription/TransactionDescription') })
const AsyncAdminTransactionDescritpions = MyLoadable({ loader: () => import('../pages/Admin/TransactionDescription/TransactionDescriptions') }, [AsyncAdminTransactionDescritpion])
// ADMIN PAGES

// USER PAGES


const routes = [
  <RestrictedRoute type="private" path="/" exact component={AsyncAdminDashboard} />,
  <RestrictedRoute type="private" path="/about" exact component={AsyncAbout} />,

  // ADMIN ROUTES
  <AdminRoute type="private" path="/dashboard" exact component={AsyncAdminDashboard} />,
  <AdminRoute type="private" path="/admin/companies" exact component={AsyncAdminCompanies} />,
  <AdminRoute type="private" path="/admin/companies/edit/:uid" exact component={AsyncAdminCompany} />,
  <AdminRoute type="private" path="/admin/companies/create" exact component={AsyncAdminCompany} />,
  <AdminRoute type="private" path="/admin/tasks" exact component={AsyncAdminTasks} />,
  <AdminRoute type="private" path="/admin/tasks/create" exact component={AsyncAdminTask} />,
  <AdminRoute type="private" path="/admin/tasks/edit/:uid" exact component={AsyncAdminTask} />,
  <AdminRoute type="private" path="/admin/credit_cards" exact component={AsyncAdminCreditCards} />,
  <AdminRoute type="private" path="/admin/credit_cards/create" exact component={AsyncAdminCreditCard} />,
  <AdminRoute type="private" path="/admin/credit_cards/edit/:uid" exact component={AsyncAdminCreditCard} />,
  <AdminRoute type="private" path="/admin/account_statements" exact component={AsyncAdminAccountStatements} />,
  <AdminRoute type="private" path="/admin/account_statements/create" exact component={AsyncAdminAccountStatement} />,
  <AdminRoute type="private" path="/admin/account_statements/edit/:uid" exact component={AsyncAdminAccountStatement} />,
  <AdminRoute type="private" path="/admin/transactions" exact component={AsyncAdminTransactions} />,
  <AdminRoute type="private" path="/admin/transactions/create" exact component={AsyncAdminTransaction} />,
  <AdminRoute type="private" path="/admin/transactions/edit/:uid" exact component={AsyncAdminTransaction} />,
  <AdminRoute type="private" path="/admin/categories" exact component={AsyncAdminCategories} />,
  <AdminRoute type="private" path="/admin/categories/create" exact component={AsyncAdminCategory} />,
  <AdminRoute type="private" path="/admin/categories/edit/:uid" exact component={AsyncAdminCategory} />,
  <AdminRoute type="private" path="/admin/transaction_descriptions" exact component={AsyncAdminTransactionDescritpions} />,
  <AdminRoute type="private" path="/admin/transaction_descriptions/create" exact component={AsyncAdminTransactionDescritpion} />,
  <AdminRoute type="private" path="/admin/transaction_descriptions/edit/:uid" exact component={AsyncAdminTransactionDescritpion} />,
  // ADMIN ROUTES

  //USER ROUTES
]

export default routes
