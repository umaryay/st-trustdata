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

function renderTransactionList(elementId, transactions) {
  const element = document.getElementById(elementId);

  if (transactions.length === 0) {
    element.className = "empty-state";
    element.textContent = "No transactions yet.";
    return;
  }

  element.className = "transaction-list";

  element.innerHTML = transactions.map(item => `
    <div class="transaction-item">
      <strong>${escapeHTML(item.name)}</strong>

      <small>${escapeHTML(item.date)}</small>

      <span class="transaction-amount">
        ${formatMoney(item.amount)}
      </span>
    </div>
  `).join("");
}

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function showPage(pageId) {
  const allowedPages = [
    "homePage",
    "transactionsPage",
    "walletPage",
    "profilePage"
  ];

  if (!allowedPages.includes(pageId)) return;

  document.querySelectorAll(".page-section").forEach(page => {
    page.hidden = page.id !== pageId;
  });

  document.querySelectorAll(".bottom-nav button").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.page === pageId
    );
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  displayTransactions();
  updateBalance();
}

function buyService(service) {
  if (service === "Data") {
    const network = prompt(
      "Choose network:\n\n" +
      "1. MTN\n" +
      "2. Airtel\n" +
      "3. Glo\n" +
      "4. 9mobile"
    );

    if (network === null) return;

    const networks = {
      "1": "MTN",
      "2": "Airtel",
      "3": "Glo",
      "4": "9mobile"
    };

    if (!networks[network]) {
      alert("Please select a valid network.");
      return;
    }

    alert(
      networks[network] +
      " selected.\n\n" +
      "Real data purchases are not enabled yet."
    );

    return;
  }

  if (service === "Airtime") {
    alert("Airtime purchases are not enabled yet.");
    return;
  }

  if (service === "Bills") {
    alert("Bill payments are not enabled yet.");
  }
}

updateBalance();
displayTransactions();
showPage("homePage");
