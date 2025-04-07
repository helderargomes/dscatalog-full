import { render, screen } from "@testing-library/react";
import ProductPrice from "..";

describe("ProductPrice tests", () => {
    test("should render ProductPrice", () => {
        
        const price = 90.5;

        

        render(<ProductPrice price={price} />);

       
        expect(screen.getByText("R$")).toBeInTheDocument;
        expect(screen.getByText("90,50")).toBeInTheDocument;
    })
})