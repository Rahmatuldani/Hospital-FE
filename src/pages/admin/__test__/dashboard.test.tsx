import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dashboard } from "..";

describe('Admin Dashboard Test', () => { 
    it('Test Page', () => {
        render(<Dashboard/>);
        const text = screen.getByText('Dashboard');
        expect(text).toBeInTheDocument();
    });
});