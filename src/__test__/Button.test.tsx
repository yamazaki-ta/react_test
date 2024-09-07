import { render, screen } from '@testing-library/react'
import Button from '../components/Button'

describe('Button', () => {
     it('buttonタグがレンダリングされる', () => {
          render(<Button label="ボタン" onClick={() => alert('クリック')} />)
          const element = screen.getByRole('button')
          expect(element).toBeInTheDocument() // buttonタグがレンダリングされる
          expect(element).toHaveTextContent('ボタン') //ラベルが表示されているか
     })
})
