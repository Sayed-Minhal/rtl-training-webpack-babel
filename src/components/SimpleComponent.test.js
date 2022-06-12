import React from "react";
import { render, screen } from "@testing-library/react";

import SimpleComponent from './SimpleComponent';

describe('Render component', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = render(<SimpleComponent />);
    });

    it('should take snapshot', () => {    
        expect(wrapper.container).toMatchSnapshot();
    });
    
    it('should find the title', () => {
        const titleElement = screen.getByText(/Ya Ali Madad/i);
        expect(titleElement).toBeInTheDocument();
    });
});
