import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Auth from './pages/Auth'

import HomeUser from './pages/User/Home'
import DetailProduct from './pages/User/DetailProduct'
import ComplainUser from './pages/User/ComplainUser'
import Profile from './pages/User/Profile'
import EditProfile from './pages/User/EditProfile'

import Product from './pages/Admin/Product'
import AddProduct from './pages/Admin/AddProduct'
import EditProduct from './pages/Admin/EditProduct'
import Category from './pages/Admin/Category'
import AddCategory from './pages/Admin/AddCategory'
import EditCategory from './pages/Admin/EditCategory'
import ComplainAdmin from './pages/Admin/ComplainAdmin'

import PrivateRoute from './components/route/PrivateRoute'

function App() {
  return (
    <Routes>
      {/* Login-Register */}
      <Route path="/" element={<Auth />} />

      {/* User Page */}
      <Route path="/home" element={<HomeUser />} />
      <Route path="/detail-product/:id" element={<DetailProduct />} />
      <Route path="/complain-user" element={<ComplainUser />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      {/* Admin Page */}

      <Route element={<PrivateRoute />} >
        <Route path="/product" element={<Product />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/category" element={<Category />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/edit-category/:id" element={<EditCategory />} />
        <Route path="/complain-admin" element={<ComplainAdmin />} />
      </Route>
    </Routes>
  )
}

export default App