import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Dashboard } from "..";

describe('Admin Dashboard Test', () => { 
    it('First test', () => {
        render(<Dashboard/>);
        const text = screen.getByText('Admin Dashboard');
        expect(text).toBeInTheDocument();
    });
});