describe("Тестуємо функцію ageClassification()", () => {

  it("ageClassification(-1) поверне: null", function () {
    expect(ageClassification(-1)).toBe(null);
  });

  it("ageClassification(1) поверне: детский возраст", function () {
    expect(ageClassification(1)).toBe("детский возраст");
  });

  it("ageClassification(24) поверне: детский возраст", function () {
    expect(ageClassification(24)).toBe("детский возраст");
  });

  it("ageClassification(24.01) поверне: молодой возраст", function () {
    expect(ageClassification(24.01)).toBe("молодой возраст");
  });

  it("ageClassification(44) поверне: молодой возраст", function () {
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it("ageClassification(44.01) поверне: средний возраст", function () {
    expect(ageClassification(44.01)).toBe("средний возраст");
  });

  it("ageClassification(65) поверне: средний возраст", function () {
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it("ageClassification(65.1) поверне: пожилой возраст", function () {
    expect(ageClassification(65.1)).toBe("пожилой возраст");
  });

  it("ageClassification(75) поверне: пожилой возраст", function () {
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it("ageClassification(75.01) поверне: старческий возраст", function () {
    expect(ageClassification(75.01)).toBe("старческий возраст");
  });

  it("ageClassification(90) поверне: старческий возраст", function () {
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it("ageClassification(90.01) поверне: долгожители", function () {
    expect(ageClassification(90.01)).toBe("долгожители");
  });

  it("ageClassification(122) поверне: долгожители", function () {
    expect(ageClassification(122)).toBe("долгожители");
  });

  it("ageClassification(122.01) поверне: null", function () {
    expect(ageClassification(122.01)).toBe(null);
  });

  it("ageClassification(150) поверне: null", function () {
    expect(ageClassification(150)).toBe(null);
  });

});

describe("Тестуємо функцію weekFn()", () => {

  it("weekFn(1) поверне: Понедельник", function () {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("weekFn(2) поверне: Вторник", function () {
    expect(weekFn(2)).toBe("Вторник");
  });

  it("weekFn(3) поверне: Среда", function () {
    expect(weekFn(3)).toBe("Среда");
  });

  it("weekFn(4) поверне: Четверг", function () {
    expect(weekFn(4)).toBe("Четверг");
  });

  it("weekFn(5) поверне: Пятница", function () {
    expect(weekFn(5)).toBe("Пятница");
  });

  it("weekFn(6) поверне: Суббота", function () {
    expect(weekFn(6)).toBe("Суббота");
  });

  it("weekFn(7) поверне: Воскресенье", function () {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("weekFn(9) поверне: null", function () {
    expect(weekFn(9)).toBe(null);
  });

  it("weekFn(1.5) поверне: null", function () {
    expect(weekFn(1.5)).toBe(null);
  });

  it("weekFn(\"2\") поверне: null", function () {
    expect(weekFn("2")).toBe(null);
  });

  it("weekFn(0) поверне: null", function () {
    expect(weekFn(0)).toBe(null);
  });

  it("weekFn(-1) поверне: null", function () {
    expect(weekFn(-1)).toBe(null);
  });

});