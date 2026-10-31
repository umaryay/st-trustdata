const STORAGE_BALANCE = "stTestBalance";
const STORAGE_TRANSACTIONS = "stTestTransactions";

let balance = Number(localStorage.getItem(STORAGE_BALANCE) || 0);

function formatMoney(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function updateBalance() {
  document.getElementById("balance").textContent =
    formatMoney(balance);

  document.getElementById("walletBalance").textContent =
    formatMoney(balance);
}

function getTransactions() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_TRANSACTIONS) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTransaction(name, amount) {
  const transactions = getTransactions();

  transactions.unshift({
    name: name,
    amount: amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(
    STORAGE_TRANSACTIONS,
    JSON.stringify(transactions.slice(0, 100))
  );

  displayTransactions();
}

function addMoney() {
  const input = prompt("Enter test money amount in naira:");

  if (input === null) return;

  const amount = Number(input);

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (amount > 1000000) {
    alert("Maximum test amount is ₦1,000,000.");
    return;
  }

  balance += amount;

  localStorage.setItem(STORAGE_BALANCE, String(balance));

  saveTransaction("Test Money Added", amount);

  updateBalance();

  alert(
    "Test money added successfully.\n\n" +
    "This is not real money."
  );
}

function displayTransactions() {
  const transactions = getTransactions();

  renderTransactionList(
    "homeTransactions",
    transactions.slice(0, 3)
  );

  renderTransactionList(
    "allTransactions",
    transactions
  );
}
const storage_balance = "sttestbalance";
const storage_transactions = "sttesttransactions";

let balance = number(localstorage.getitem(storage_balance) || 0);

function formatmoney(amount) {
  return "₦" + number(amount).tolocalestring("en-ng", {
    minimumfractiondigits: 2,
    maximumfractiondigits: 2
  });
}

function updatebalance() {
  document.getelementbyid("balance").textcontent =
    formatmoney(balance);

  document.getelementbyid("walletbalance").textcontent =
    formatmoney(balance);
}

function gettransactions() {
  try {
    const data = json.parse(
      localstorage.getitem(storage_transactions) || "[]"
    );

    return array.isarray(data) ? data : [];
  } catch {
    return [];
  }
}

function savetransaction(name, amount) {
  const transactions = gettransactions();

  transactions.unshift({
    name: name,
    amount: amount,
    date: new date().tolocalestring()
  });

  localstorage.setitem(
    storage_transactions,
    json.stringify(transactions.slice(0, 100))
  );

  displaytransactions();
}

function addmoney() {
  const input = prompt("enter test money amount in naira:");

  if (input === null) return;

  const amount = number(input);

  if (!number.isfinite(amount) || amount <= 0) {
    alert("please enter a valid amount.");
    return;
  }

  if (amount > 1000000) {
    alert("maximum test amount is ₦1,000,000.");
    return;
  }

  balance += amount;

  localstorage.setitem(storage_balance, string(balance));

  savetransaction("test money added", amount);

  updatebalance();

  alert(
    "test money added successfully.\n\n" +
    "this is not real money."
  );
}

function displaytransactions() {
  const transactions = gettransactions();

  rendertransactionlist(
    "hometransactions",
    transactions.slice(0, 3)
  );

  rendertransactionlist(
    "alltransactions",
    transactions
  );
}

function rendertransactionlist(elementid, transactions) {
  const element = document.getelementbyid(elementid);

  if (transactions.length === 0) {
    element.classname = "empty-state";
    element.textcontent = "no transactions yet.";
    return;
  }

  element.classname = "transaction-list";

  element.innerhtml = transactions.map(item => `
    <div class="transaction-item">
      <strong>${escapehtml(item.name)}</strong>

      <small>${escapehtml(item.date)}</small>

      <span class="transaction-amount">
        ${formatmoney(item.amount)}
      </span>
    </div>
  `).join("");
}

function escapehtml(value) {
  return string(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showpage(pageid) {
  const allowedpages = [
    "homepage",
    "transactionspage",
    "walletpage",
    "profilepage"
  ];

  if (!allowedpages.includes(pageid)) return;

  document.queryselectorall(".page-section").foreach(page => {
    page.hidden = page.id !== pageid;
  });

  document.queryselectorall(".bottom-nav button").foreach(button => {
    button.classlist.toggle(
      "active",
      button.dataset.page === pageid
    );
  });

  window.scrollto({ top: 0, behavior: "smooth" });

  displaytransactions();
  updatebalance();
}

function buyservice(service) {
  if (service === "data") {
    const network = prompt(
      "choose network:\n\n" +
      "1. mtn\n" +
      "2. airtel\n" +
      "3. glo\n" +
      "4. 9mobile"
    );

    if (network === null) return;

    const networks = {
      "1": "mtn",
      "2": "airtel",
      "3": "glo",
      "4": "9mobile"
    };

    if (!networks[network]) {
      alert("please select a valid network.");
      return;
    }

    alert(
      networks[network] +
      " selected.\n\n" +
      "real data purchases are not enabled yet."
    );

    return;
  }

  if (service === "airtime") {
    alert("airtime purchases are not enabled yet.");
    return;
  }

  if (service === "bills") {
    alert("bill payments are not enabled yet.");
  }
}

updatebalance();
displaytransactions();
showpage("homepage");￼enterSTORAGE_BALANCE = "stTestBalance";
const STORAGE_TRANSACTIONS = "stTestTransactions";

let balance = Number(localStorage.getItem(STORAGE_BALANCE) || 0);

function formatMoney(amount) {
  return "₦" + Number(amount).toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
}

function updateBalance() {
  document.getElementById("balance").textContent =
    formatMoney(balance);

  document.getElementById("walletBalance").textContent =
    formatMoney(balance);
}

function getTransactions() {
  try {
    const data = JSON.parse(
      localStorage.getItem(STORAGE_TRANSACTIONS) || "[]"
    );

    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveTransaction(name, amount) {
  const transactions = getTransactions();

  transactions.unshift({
    name: name,
    amount: amount,
    date: new Date().toLocaleString()
  });

  localStorage.setItem(
    STORAGE_TRANSACTIONS,
    JSON.stringify(transactions.slice(0, 100))
  );

  displayTransactions();
}

function addMoney() {
  const input = prompt("Enter test money amount in naira:");

  if (input === null) return;

  const amount = Number(input);

  if (!Number.isFinite(amount) || amount <= 0) {
    alert("Please enter a valid amount.");
    return;
  }

  if (amount > 1000000) {
    alert("Maximum test amount is ₦1,000,000.");
    return;
  }

  balance += amount;

  localStorage.setItem(STORAGE_BALANCE, String(balance));

  saveTransaction("Test Money Added", amount);

  updateBalance();

  alert(
    "Test money added successfully.\n\n" +
    "This is not real money."
  );
}

function displayTransactions() {
  const transactions = getTransactions();

  renderTransactionList(
    "homeTransactions",
    transactions.slice(0, 3)
  );

  renderTransactionList(
    "allTransactions",
    transactions
  );
}
