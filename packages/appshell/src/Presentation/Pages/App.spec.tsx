import { screen, render } from '@testing-library/react'

import App from './App'

describe('<App />', () => {
  it('should render App component properly', () => {
    render(<App />)
    expect(screen.queryByText('Appshell')).toBeInTheDocument()
  })
})
