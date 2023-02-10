import { render, screen } from '@testing-library/react'
import App from './App'

describe('App Component', () => {
  test('Example', () => {
    render(<App />)
    const appDiv = screen.getByText(/app/i)
    expect(appDiv).toBeInTheDocument()
  })
})
