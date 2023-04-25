import react from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from "./Login";

describe("Login", () => {
  it("should render login", async () => {
    const mockHandler = jest.fn();
    const { container } = render(<Login handleLoginSuccess={mockHandler} />);

    const spy = screen.getByRole<HTMLInputElement>("textbox", {
      name: "SPY ID",
    });
    const password = container.querySelector<HTMLInputElement>(
      "input[name='password']"
    ) as Element;
    await userEvent.type(spy, "username");
    await userEvent.type(password, "password");

    expect(spy.value).toBe("username");
  });

  it("should handle login on sucessful enter of data", async () => {
    const mockHandler = jest.fn();
    const { container } = render(<Login handleLoginSuccess={mockHandler} />);

    const spy = screen.getByRole<HTMLInputElement>("textbox", {
      name: "SPY ID",
    });
    const password = container.querySelector<HTMLInputElement>(
      "input[name='password']"
    ) as Element;
    const loginBtn = screen.getByRole("button", { name: "Login" });

    await userEvent.type(spy, "username");
    await userEvent.type(password, "password");

    expect(spy.value).toBe("username");
    // expect(password.value).toBe("password");

    userEvent.click(loginBtn);
    await waitFor(() => {
      expect(mockHandler).toHaveBeenCalled();
    });
  });
});
