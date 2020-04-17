import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import NewPost from './components/NewPost'
import Login from './components/Login'
import Register from './components/Register'
import PostDetails from './components/PostDetails'

function App() {
  return (
    <Router>
      <Navbar />
      <main className="min-h-screen">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/newpost" exact component={NewPost} />

          <Route path="/login" exact component={Login} />

          <Route path="/register" exact component={Register} />

          <Route path="/post/:id" exact component={PostDetails} />
        </Switch>
      </main>
      <footer className="h-32 border mt-8 shadow"></footer>
    </Router>
  )
}

export default App
