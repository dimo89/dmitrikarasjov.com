import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Page from '@/app/page'

describe('Page', () => {
    it('renders the hero section', () => {
        render(<Page />)
        const text = screen.getByText(/Digital Experiences/i)
        expect(text).toBeInTheDocument()
    })
})
