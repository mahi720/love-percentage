
    function lovecall() {
    const firstname = document.getElementById("firstname");
    const lastname = document.getElementById("lastname");
    const error = document.getElementById("error");
    const answer = document.getElementsByClassName("heading");
    const message = document.getElementsByClassName("message");

    if (firstname.value == " " || lastname.value == " ") {
        error.style.visibility = "visible";
    error.innerText = "invalid name";
    error.style.color = "orange";
        } else if (firstname.value.length < 3 || lastname.value.length < 3) {
        error.style.visibility = "visible";
    error.innerText = "Name must be in minimum 3 character";
    error.style.color = "black";
        } else {
          var love = parseInt(Math.random() * 100);
    // var love = 9;
    answer[0].innerHTML = love + "%";
    answer[0].style.visibility = "visible";
    message[0].innerText = `Mr.${firstname.value} and Mrs.${lastname.value} Congratulation for a pretty couple. `;
    if (love === 0) {
        message[0].innerText = `Yaar Es Mai bhi shayari dundte ho, Breakup kr lo `;
          } else if (
    love === 1 ||
    love === 2 ||
    love === 3 ||
    love === 4 ||
    love === 5
    ) {
        message[0].innerText = `Khoobsurati bikher dene walo ko
                                       Kya zarurat hai sawarne ki`;
          } else if (
    love === 6 ||
    love === 7 ||
    love === 8 ||
    love === 9 ||
    love === 10
    ) {
        message[0].innerText = `Wo  to  khud   kayamat   hai
                                       Use kya zarurat hai tarif ki`;
          } else if (
    love === 11 ||
    love === 12 ||
    love === 13 ||
    love === 14 ||
    love === 15
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you. 
                                       Kisi anjan sksha ke behkabe mai aa gya
                                       Mai pagal tha Jo tere rste mai aa gya`;
          } else if (
    love === 16 ||
    love === 17 ||
    love === 18 ||
    love === 19 ||
    love === 20
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                       Tujhe palko par bithane ko jee chahta hai
                                       Teri  baho  se  lipatne ko jee chahta hai `;
          } else if (
    love === 21 ||
    love === 22 ||
    love === 23 ||
    love === 24 ||
    love === 25
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                             Khubsurati    ki    inteha   hai    tu
                                            Tujhe zindgi me basane ko jee chahta hai`;
          } else if (
    love === 26 ||
    love === 27 ||
    love === 28 ||
    love === 29 ||
    love === 30
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                        En aankho ko jab-jab unka,Deedar ho jata hai
                                       Din koi bhi ho lekin,Mera tyohaar ho jata hai `;
          } else if (
    love === 31 ||
    love === 32 ||
    love === 33 ||
    love === 34 ||
    love === 35
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                        Kuch  apna  andaz  hai  kuch  mausam rangeen hai,
                                       Tariff karu ya chup rahu zurm dono hi sangeen hai`;
          } else if (
    love === 36 ||
    love === 37 ||
    love === 38 ||
    love === 39 ||
    love === 40
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                        Roz ek taaja sher kaha tak likhu tere liye,
                                       Tujhme to roz hi ek nayi baat hua karti hai`;
          } else if (
    love === 41 ||
    love === 42 ||
    love === 43 ||
    love === 44 ||
    love === 45
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                        Hosh-ae-hawas  pe  kabu  to kar liya maine,
                                       Unhe dekh ke fir hosh kho gaye to kya hoga.`;
          } else if (
    love === 46 ||
    love === 47 ||
    love === 48 ||
    love === 49 ||
    love === 50
    ) {
        message[0].innerText = `Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                       Aaj   uski  masumiyat  ke kayal ho gaye,
                                       Sirf uski ek nazar se hi ghayal ho gaye.`;
          } else if (
    love === 51 ||
    love === 52 ||
    love === 53 ||
    love === 54 ||
    love === 55
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                       Tu zara-si kam khoobsurat hoti,
                                       To  bhi  bhut  khoobsurat hoti`;
          } else if (
    love === 56 ||
    love === 57 ||
    love === 58 ||
    love === 59 ||
    love === 60
    ) {
        message[0].innerText = `Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                    Tujhko dekha fir usko na dekha,
                                 Wo khta raha.. mai chand hu, mai chand hu`;
          } else if (
    love === 61 ||
    love === 62 ||
    love === 63 ||
    love === 64 ||
    love === 65
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                       Mai sochta hu wo kaise mere sath aai 
                                       Riste  tamam  tor kar  mere pass aai`;
          } else if (
    love === 66 ||
    love === 67 ||
    love === 68 ||
    love === 69 ||
    love === 70
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                       Uske anukul badlata rha khud ko 
                                      dheere dheere sawarta rha khud ko`;
          } else if (
    love === 71 ||
    love === 72 ||
    love === 73 ||
    love === 74 ||
    love === 75
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                    Kal hi mile un se phir bhi milne ko ji krta hai
                                 waqt jara thahro unhe kuch der aur dekhne ko ji krta hai `;
          } else if (
    love === 76 ||
    love === 77 ||
    love === 78 ||
    love === 79 ||
    love === 80
    )
    [
    (message[0].innerText = `Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
    sard hawa bin moosam barsat ho tum
    id ki chand  amawas ki raat ho tum`),
    ];
    else if (
    love === 81 ||
    love === 82 ||
    love === 83 ||
    love === 84 ||
    love === 85
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                        Wo mujhse roz khti thi mujhe chand lakar do,
                                       Use  ek  aaina  dekar  akela  chhod  aaya hu `;
          } else if (
    love === 86 ||
    love === 87 ||
    love === 88 ||
    love === 89 ||
    love === 90
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                      Husn ka kya kaam sacchi mohabbat mai,
                                    Rang sawla bhi ho to Yaar katil lgta hai`;
          } else if (
    love === 91 ||
    love === 92 ||
    love === 93 ||
    love === 94 ||
    love === 95
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                    Mujhe maloom nahi husn ki tarif,
                                Meri nazro me haseen Wo hai jo tum jaisa ho`;
          } else if (
    love === 96 ||
    love === 97 ||
    love === 98 ||
    love === 99 ||
    love === 100
    ) {
        message[0].innerText = ` Hey, Mr. "${firstname.value}" and Mrs. "${lastname.value}" this is for you.
                                    Kya likhu teri tarif-ae-soorat me yaar,
                                Alfaz kam pad rahe hai Teri mohabbat dekhkar`;
          }
        }
      }
