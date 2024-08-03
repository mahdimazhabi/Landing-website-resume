document.addEventListener("DOMContentLoaded", () => {
  const moonIcon = document.querySelector("#moon-icon");
  const sunIcon = document.querySelector("#sun-icon");
  const temvev = document.querySelector("#tem");
  const tem1 = document.querySelector("#tem1");
  const htmlElement = document.documentElement;

  const moon1 = document.querySelector("#moon1");
  const sun1 = document.querySelector("#sun1");

  // تابع برای به‌روزرسانی نمایش آیکون‌ها بر اساس حالت دارک
  function updateIcons(isDarkMode) {
    if (isDarkMode) {
      moonIcon.style.display = "block";
      sunIcon.style.display = "none";
      moon1.style.display = "block";
      sun1.style.display = "none";
    } else {
      moonIcon.style.display = "none";
      sunIcon.style.display = "block";
      moon1.style.display = "none";
      sun1.style.display = "block";
    }
  }

  // بررسی و بازیابی حالت دارک از Local Storage
  const isDarkMode = localStorage.getItem("darkMode") === "true";
  if (isDarkMode) {
    htmlElement.classList.add("dark");
  } else {
    htmlElement.classList.remove("dark");
  }
  updateIcons(isDarkMode);

  // تابع تغییر حالت دارک و به‌روزرسانی آیکون‌ها
  function toggleDarkMode() {
    const isDarkMode = htmlElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDarkMode);
    updateIcons(isDarkMode);
  }

  // گوش دادن به کلیک برای تغییر حالت دارک
  temvev.addEventListener("click", toggleDarkMode);
  tem1.addEventListener("click", toggleDarkMode);
});

const Iconsbars = document.querySelector("#icons-bars");
const headermoblie = document.querySelector("#header-moblie");
const icnoclose = document.querySelector("#icon-close");

Iconsbars.addEventListener("click", () => {
  headermoblie.style.display = "block";
});

icnoclose.addEventListener("click", () => {
  headermoblie.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const second = document.querySelector("#second");
  const min = document.querySelector("#min");
  const hours = document.querySelector("#hours");
  const day = document.querySelector("#Day");

  const second1 = document.querySelector("#second1");
  const min1 = document.querySelector("#min1");
  const hours1 = document.querySelector("#hours1");
  const day1 = document.querySelector("#Day1");

  // زمان اولیه (7 روز به میلی‌ثانیه)
  let initialTime = 7 * 24 * 60 * 60 * 1000; // مدت زمان بر حسب میلی‌ثانیه

  // بازیابی زمان باقی‌مانده از localStorage یا تنظیم مقدار اولیه
  // let remainingTime = localStorage.getItem("remainingTime")
  //   ? parseInt(localStorage.getItem("remainingTime"), 10)
  //   : initialTime;

  // function updateTime() {
  //   // کاهش یک ثانیه از زمان باقی‌مانده
  //   remainingTime -= 1000;

  //   // محاسبه روز، ساعت، دقیقه و ثانیه باقیمانده
  //   let totalSeconds = Math.floor(remainingTime / 1000);
  //   let getSeconds = totalSeconds % 60;
  //   let totalMinutes = Math.floor(totalSeconds / 60);
  //   let getMinutes = totalMinutes % 60;
  //   let totalHours = Math.floor(totalMinutes / 60);
  //   let getHours = totalHours % 24;
  //   let getDays = Math.floor(totalHours / 24);

  //   // نمایش زمان
  //   second.innerHTML = `${getSeconds < 10 ? "0" : ""}${getSeconds}`;
  //   min.innerHTML = `${getMinutes < 10 ? "0" : ""}${getMinutes}`;
  //   hours.innerHTML = `${getHours < 10 ? "0" : ""}${getHours}`;
  //   day.innerHTML = `${getDays}`;

  //   second1.innerHTML = `${getSeconds < 10 ? "0" : ""}${getSeconds}`;
  //   min1.innerHTML = `${getMinutes < 10 ? "0" : ""}${getMinutes}`;
  //   hours1.innerHTML = `${getHours < 10 ? "0" : ""}${getHours}`;
  //   day1.innerHTML = `${getDays}`;

  //   // متوقف کردن تایمر وقتی که به صفر می‌رسد و بازگشت به حالت اولیه
  //   if (remainingTime <= 0) {
  //     remainingTime = initialTime;
  //   }

  //   // ذخیره زمان باقی‌مانده در localStorage
  //   localStorage.setItem("remainingTime", remainingTime);
  // }

  // بلافاصله ساعت را به‌روزرسانی کنید
  // updateTime();

  // هر 1000 میلی‌ثانیه (1 ثانیه) تابع updateTime را اجرا کنید
  const timerInterval = setInterval(updateTime, 1000);
});

const arrowup = document.querySelector("#aroww-up");
const arrowdown = document.querySelector("#aroww-down");

arrowup.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", () => {
  let scrolly = scrollY;

  if (scrolly < 1016) {
    arrowup.style.display = "none";
  } else {
    arrowup.style.display = "block";
  }
});

arrowdown.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });

  window.addEventListener("scroll", () => {
    let scrolly = scrollY;

    if (scrolly > 100) {
      arrowdown.style.display = "none";
    } else {
      arrowdown.style.display = "block";
    }
  });
});

let db = null;
let objectStore = null;

const inputname = document.querySelector("#input-name");

const inputfoon = document.querySelector("#input-foon");

const reigesterform = document.querySelector("#reigesterform");

const inputname1 = document.querySelector("#input-name1");

const inputfoon1 = document.querySelector("#input-foon1");

const reigesterform1 = document.querySelector("#reigesterform1");

window.addEventListener("load", (event) => {
  let DBOpenReq = indexedDB.open("DATA USER", 1);

  console.log("Old V:", event.oldVersion);
  console.log("New V:", event.newVersion);

  DBOpenReq.addEventListener("error", (err) => {
    console.warn("Error", err);
  });

  DBOpenReq.addEventListener("success", (event) => {
    db = event.target.result;

    console.log("success", event.target.result);
  });

  DBOpenReq.addEventListener("upgradeneeded", (event) => {
    db = event.target.result;

    if (!db.objectStoreNames.contains("users")) {
      objectStore = db.createObjectStore("users", {
        keyPath: "userID",
      });
    }
  });
});

reigesterform.addEventListener("click", (event) => {
  event.preventDefault();
  let newuser = {
    userID: Math.floor(Math.random() * 9999),
    name: inputname.value,
    number: inputfoon.value,
  };

  let tx = db.transaction("users", "readwrite");

  tx.oncomplete = function () {
    console.log("Transaction completed successfully");
  };

  tx.onerror = function (event) {
    console.error("Transaction error: ", event.target.errorCode);
  };

  let store = tx.objectStore("users");
  let request = store.add(newuser);
  Deleteinputvlue2();

  request.onsuccess = function (event) {
    console.log("User added successfully");
    alert("اطلاعات شما ذخیره شد و کد تخفیف شما" + "  " + newuser.userID);
  };
  // clearAllRecords(); این همون تابع است که اطلاعات رو پاک میکنه حواست باشه که از کامنت درش نیاری

  request.onerror = function (event) {
    console.error("Error adding user: ", event.target.errorCode);
  };
});
function Deleteinputvlue2() {
  inputname.value = "";
  inputfoon.value = "";
  inputname.placeholder = "نام شما";
  inputfoon.placeholder = "شماره تماس";
}
reigesterform1.addEventListener("click", (event) => {
  event.preventDefault();
  let newuser = {
    userID: Math.floor(Math.random() * 9999),
    name: inputname1.value,
    number: inputfoon1.value,
  };

  let tx = db.transaction("users", "readwrite");

  tx.oncomplete = function () {
    console.log("Transaction completed successfully");
  };

  tx.onerror = function (event) {
    console.error("Transaction error: ", event.target.errorCode);
  };

  let store = tx.objectStore("users");
  let request = store.add(newuser);
  Deleteinputvlue();

  request.onsuccess = function (event) {
    console.log("User added successfully");
    alert("اطلاعات شما ذخیره شد و کد تخفیف برای شما ارسال میشود");
  };
  // clearAllRecords(); این همون تابع است که اطلاعات رو پاک میکنه حواست باشه که از کامنت درش نیاری

  request.onerror = function (event) {
    console.error("Error adding user: ", event.target.errorCode);
  };
});

function Deleteinputvlue() {
  inputname1.value = "";
  inputfoon1.value = "";
  inputname1.placeholder = "نام شما";
  inputfoon1.placeholder = "شماره تماس";
}
////// پاک کردن تمام اطلاعات دیتا ها با استفاده از تابع زیر

function clearAllRecords() {
  let tx = db.transaction("users", "readwrite");
  let store = tx.objectStore("users");

  let request = store.clear();

  request.onsuccess = function (event) {
    console.log("All records cleared successfully");
  };

  request.onerror = function (event) {
    console.error("Error clearing records: ", event.target.errorCode);
  };
}
/////////////////////////////////////
const divnet = document.querySelector("#divnet");
const iconclosenet = document.querySelector("#iconclosenet");

function closediv() {
  divnet.style.display = "none";
}

function updateOnlineStatus(event) {
  if (navigator.onLine) {
    divnet.style.display = "none";
  } else {
    divnet.style.display = "block";

    // Hide the message after 5 seconds
    setTimeout(() => {
      divnet.style.display = "none";
    }, 5000);
  }
}

window.addEventListener("load", (event) => {
  // Initial check when the page loads
  updateOnlineStatus();

  window.addEventListener("online", updateOnlineStatus);
  window.addEventListener("offline", updateOnlineStatus);
});

iconclosenet.addEventListener("click", closediv);
