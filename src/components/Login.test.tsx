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
    expect((password as HTMLInputElement).value).toBe("password");
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
    expect((password as HTMLInputElement).value).toBe("password");

    userEvent.click(loginBtn);
    await waitFor(() => {
      expect(mockHandler).toHaveBeenCalledWith({
        spyId: "username",
        password: "password",
      });
      const error = container.querySelector(`[data-testid="error"]`);
      expect(error).toBeNull();
    });
  });

  it("should show errors when spyid or password is missing", async () => {
    const mockHandler = jest.fn();
    const { container } = render(<Login handleLoginSuccess={mockHandler} />);
    const loginBtn = screen.getByRole("button", { name: "Login" });
    userEvent.click(loginBtn);
    await waitFor(() => {
      expect(
        screen.getByText(/Both Spyid and Password are required/)
      ).toBeDefined();
    });
  });
});
