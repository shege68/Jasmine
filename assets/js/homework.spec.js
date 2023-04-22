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