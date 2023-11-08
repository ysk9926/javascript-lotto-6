import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  // TODO: 이 테스트가 통과할 수 있게 구현 코드 작성
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복되지 않는 6개의 숫자로 입력해 주세요.");
  });

  // 아래에 추가 테스트 작성 가능
  test("로또 번호에 숫자가 아닌 타입이 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, "ㅂ"]);
    }).toThrow("[ERROR] 로또 번호는 숫자로만 이루어져야 합니다.");
  });

  test("로또 번호에 유효 범위외의 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 55]);
    }).toThrow("[ERROR] 1에서 45 사이에 숫자만 입력이 가능합니다.");
  });
});
