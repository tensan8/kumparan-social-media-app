import { render, screen } from '@testing-library/react';
import logoSrc from './assets/logo.png';
import Navbar from './molecules/navbar';
import SummaryCard from './molecules/summaryCard';
import Homepage from './pages/homepage';


test('render navigation bar', () => {
  render(<Homepage />);
  const navbarImage = screen.getByAltText('logo of kumparan');
  expect(navbarImage.src).toContain(logoSrc);
})

test('hiding back arrow', () => {
  const { queryByAltText } = render(<Navbar backArrowAvailable = {false}/>)
  expect(queryByAltText("Back Arrow")).not.toBeInTheDocument();
})

test('render card content dynamically', () => {
  const TestContent = [
    {
      'title': "Title 1",
      'username': 'Username 1',
      'company': 'Company 1',
      'content': 'Content 1',
      'numberOfComment': 1
    },
    {
      'title': "Title 2",
      'username': 'Username 2',
      'company': 'Company 2',
      'content': 'Content 2',
      'numberOfComment': 2
    }
  ]

  const { getByText } = render(
    TestContent.map((post) => {
      return (
        <SummaryCard title = {post.title} 
          username = {post.username}
          company = {post.company}
          content = {post.content}
          numberOfComment = {post.numberOfComment}
        />
      )
  }));

  expect(getByText("Title 1")).toBeInTheDocument;
  expect(getByText("Content 2")).toBeInTheDocument;
})
