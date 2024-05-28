import { render, screen, fireEvent } from "@testing-library/react";
import UserForm from "../components/UserForm"; // デフォルトエクスポートでインポート
import '@testing-library/jest-dom'; // カスタムマッチャーをインポート

describe("UserForm", () => {
  const mockSubmit = jest.fn().mockImplementation(() => Promise.resolve());

  beforeEach(() => {
    jest.clearAllMocks(); // 各テストの前にモックをクリア
  });

  it("renders the UserForm component", () => {
    render(<UserForm submit={mockSubmit} />);

    // フォームの各フィールドが正しくレンダリングされることを確認
    expect(screen.getByLabelText("Name:")).toBeInTheDocument();
    expect(screen.getByLabelText("Nickname:")).toBeInTheDocument();
    expect(screen.getByLabelText("Birthday:")).toBeInTheDocument();

    // 送信ボタンが正しくレンダリングされることを確認
    const buttonElement = screen.getByRole("button", { name: /送信/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent("送信");
  });

  it("calls submit function on form submission", async () => {
    render(<UserForm submit={mockSubmit} />);

    // フォームフィールドに入力
    fireEvent.change(screen.getByLabelText("Name:"), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText("Nickname:"), { target: { value: "Johnny" } });
    fireEvent.change(screen.getByLabelText("Birthday:"), { target: { value: "1990-01-01" } });

    // フォームを送信
    const buttonElement = screen.getByRole("button", { name: /送信/i });
    fireEvent.click(buttonElement);

    // 非同期処理が完了するのを待つ
    await new Promise(process.nextTick);

    // デバッグ用のコンソールログ
    console.log("mockSubmit calls:", mockSubmit.mock.calls);

    // mockSubmit関数が1回呼び出され、正しいデータが渡されることを確認
    expect(mockSubmit).toHaveBeenCalledTimes(1);
    expect(mockSubmit).toHaveBeenCalledWith({
      name: "John Doe",
      nickname: "Johnny",
      birthday: "1990-01-01",
    });
  });
});
