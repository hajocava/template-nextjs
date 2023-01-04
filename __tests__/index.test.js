import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Home from 'pages/index'
import { store } from 'redux/store'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    )

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })
})
