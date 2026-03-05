import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeAll } from 'vitest';
import Home from '@/app/page';

beforeAll(() => {
    // Mock IntersectionObserver
    class MockIntersectionObserver {
        observe = vi.fn();
        unobserve = vi.fn();
        disconnect = vi.fn();
    }
    window.IntersectionObserver = MockIntersectionObserver as any;
});

describe('Home Page', () => {
    it('renders the hero section', () => {
        render(<Home />);

        expect(screen.getByTestId('hero-section')).toBeInTheDocument();
        expect(screen.getByText(/Available for Hire/i)).toBeInTheDocument();
    });

    it('renders expertise section', () => {
        render(<Home />);

        expect(screen.getByTestId('expertise-section')).toBeInTheDocument();
    });

    it('renders stack section', () => {
        render(<Home />);

        expect(screen.getByTestId('stack-section')).toBeInTheDocument();
    });

    it('renders projects section', () => {
        render(<Home />);

        expect(screen.getByTestId('projects-section')).toBeInTheDocument();
    });

    it('renders contact section', () => {
        render(<Home />);

        expect(screen.getByTestId('contact-section')).toBeInTheDocument();
        expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
    });
});
