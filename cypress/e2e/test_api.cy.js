// describe("API Testing", () => {
//   // test scenario
//   it("Should return status code 200", () => {
//     // test case
//     cy.request("http://www.httpstat.us/200") // url endpoint
//       .then((response) => {
//         expect(response.status).to.equal(200); // verifikasi status code
//       });
//   });
// });

describe("Login API Testing", () => {
  // test scenario
  // TEST CASE 1
  it("Success Login", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/login", // url
      body: {
        email: "syakurkholid2@gmail.com",
        password: "syakur",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // verifikasi status code
      expect(response.body.status).to.equal("SUCCESS_LOGIN"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Anda Berhasil Login"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 2 Failed Login, with not registered email
  it("Failed Login, with not registered email", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/login", // url
      body: {
        email: "syakur123@gmail.com",
        password: "syakur123",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_LOGIN"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Email atau Password Anda Salah"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 3 Empty Email and Password
  it("Failed Login, Empty Email and Password", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/login", // url
      body: {
        email: "",
        password: "",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_LOGIN"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal(
        "Email & Password tidak boleh kosong"
      ); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 4 Failed Login, with email is not valid ( a@a )
  it("Failed Login, with email is not valid", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/login", // url
      body: {
        email: "syakur2gmail.com",
        password: "syakur",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(420); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_LOGIN"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Cek kembali email anda"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 5 Empty Password
  it("Failed Login, with Empty Password", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/login", // url
      body: {
        email: "syakur2@gmail.com",
        password: "",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(200); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_LOGIN"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Password tidak boleh kosong"); // verifikasi response body dan didalam value dari message
    });
  });
});

describe("Register API Testing", () => {
  // test scenario
  // TEST CASE 1
  it("Success Regist", () => {
    // Fungsi untuk menghasilkan string acak
    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    // Menghasilkan email acak
    const randomEmail = `${generateRandomString(13)}@gmail.com`;

    // Test case
    cy.request({
      method: "POST", // HTTP request
      url: "http://barru.pythonanywhere.com/register", // URL
      body: {
        email: randomEmail,
        password: "syakur212",
        name: "syakur",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Verifikasi status code
      expect(response.body.status).to.equal("SUCCESS_REGISTER"); // Verifikasi response body dan value dari status
      expect(response.body.message).to.equal("created user!"); // Verifikasi response body dan value dari message
    });
  });
  // TEST CASE 2
  it("Failed Register with empty name", () => {
    // test case Failed Register with empty name
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/register", // url
      body: {
        email: "syakur222@gmail.com",
        password: "syakur222",
        name: "",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(420); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_REGISTER"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Gagal Registrasi"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 3 Failed Register with email is registered
  it("Failed Register with email is registered", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/register", // url
      body: {
        email: "syakur2@gmail.com",
        password: "syakur222",
        name: "",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(420); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_REGISTER"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Gagal Registrasi"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 4 Failed Register, with email is not valid ( a@a )
  it("Failed Register, with email is not valid", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/register", // url
      body: {
        email: "syakur233gmail.com",
        password: "syakur",
        name: "syakur",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(420); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_REGISTER"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Cek kembali email anda"); // verifikasi response body dan didalam value dari message
    });
  });
  // TEST CASE 5 Success Register with capital email, username & Password
  it("Success Register with capital email, username & Password", () => {
    // Fungsi untuk menghasilkan string acak
    function generateRandomString(length) {
      let result = "";
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
        counter += 1;
      }
      return result;
    }

    // Menghasilkan email acak
    const randomEmail = `${generateRandomString(13)}@gmail.com`;

    // Test case
    cy.request({
      method: "POST", // HTTP request
      url: "http://barru.pythonanywhere.com/register", // URL
      body: {
        email: randomEmail,
        password: "SYAKUR12",
        name: "SYAKUR",
      },
    }).then((response) => {
      expect(response.status).to.equal(200); // Verifikasi status code
      expect(response.body.status).to.equal("SUCCESS_REGISTER"); // Verifikasi response body dan value dari status
      expect(response.body.message).to.equal("created user!"); // Verifikasi response body dan value dari message
    });
  });
  // TEST CASE 6 Failed Register, with mix character types password and username
  it("Failed Register, with mix character types password and username", () => {
    // test case
    cy.request({
      method: "POST", // http request
      url: "http://barru.pythonanywhere.com/register", // url
      body: {
        email: "syakur111@gmail.com",
        password: "@syakur111",
        name: "#syakur1",
      },
      failOnStatusCode: false, // tambahkan ini agar cypress tidak gagal saat menerima status code di luar rentang 2xx
    }).then((response) => {
      expect(response.status).to.equal(420); // verifikasi status code
      expect(response.body.status).to.equal("FAILED_REGISTER"); // verifikasi response body dan didalam value dari status
      expect(response.body.message).to.equal("Tidak boleh mengandung symbol"); // verifikasi response body dan didalam value dari message
    });
  });
});
