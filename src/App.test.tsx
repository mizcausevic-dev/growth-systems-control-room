import { render, screen } from '@testing-library/react'
import App from './App'

describe('GrowthSystemsControlRoom', () => {
  it('renders flagship control room content', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', {
        name: /one flagship surface for revenue, growth, ai, security, and operating pressure/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText(/portfolio system map/i)).toBeInTheDocument()
    expect(screen.getByText(/signal wall/i)).toBeInTheDocument()
    expect(screen.getByText(/scenario board/i)).toBeInTheDocument()
  })
})
