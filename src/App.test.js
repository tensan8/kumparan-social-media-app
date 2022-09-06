import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import logoSrc from './assets/logo.png'
import Navbar from './molecules/navbar'
import SummaryCard from './molecules/summaryCard'
import Homepage from './pages/homepage'
import { Provider } from 'react-redux'
import store from './store'

// Unit Testing 1
test('render navigation bar', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Homepage />
      </BrowserRouter>
    </Provider>
  )
  const navbarImage = screen.getByAltText('logo of kumparan')
  expect(navbarImage.src).toContain(logoSrc)
})

// Unit Testing 2
test('hiding back arrow', () => {
  const { queryByAltText } = render(
    <BrowserRouter>
      <Navbar backArrowAvailable = {false}/>
    </BrowserRouter>
  )
  expect(queryByAltText('Back Arrow')).not.toBeVisible
})

// Unit Testing 3
test('render card content dynamically', () => {
  const TestContent = [
    {
      id: 1,
      title: 'Title 1',
      content: 'Content 1',
      numberOfComment: 1,
      user: {
        username: 'Username 1',
        company: {
          name: 'Company 1'
        }
      }
    },
    {
      id: 2,
      title: 'Title 2',
      content: 'Content 2',
      numberOfComment: 2,
      user: {
        username: 'Username 2',
        company: {
          name: 'Company 2'
        }
      }
    }
  ]

  const { getByText } = render(
    TestContent.map((post) => {
      return (
          <BrowserRouter key={post.id}>
            <SummaryCard title = {post.title}
              user = {post.user}
              content = {post.content}
              numberOfComment = {post.numberOfComment}
            />
          </BrowserRouter>
      )
    })

  )

  expect(getByText('Title 1')).toBeInTheDocument
  expect(getByText('Content 2')).toBeInTheDocument
})
