document.getElementById('runButton').addEventListener('click', runSelectedTask);

function updateStatus(status) {
  const indicator = document.getElementById('statusIndicator');
  indicator.className = 'status-indicator';
  
  if (status === 'pending') {
    indicator.classList.add('status-pending');
  } else if (status === 'success') {
    indicator.classList.add('status-success');
  } else if (status === 'error') {
    indicator.classList.add('status-error');
  }
}

function runBasics(inputValue) {
  const out = document.getElementById('output');
  out.textContent = "Waiting 2 seconds...";
  updateStatus('pending');

  new Promise((resolve) => {
    setTimeout(() => resolve(inputValue || "Hello, World!"), 2000);
  }).then((msg) => {
    console.log("Promise Basics:", msg);
    out.textContent = `Promise Basics: ${msg}`;
    updateStatus('success');
  });
}

function runChaining(inputValue) {
  const out = document.getElementById('output');
  const number = parseInt(inputValue);
  updateStatus('pending');

  if (isNaN(number)) {
    out.textContent = "Please enter a valid number!";
    updateStatus('error');
    return;
  }

  out.textContent = "Running promise chain...";
  
  Promise.resolve(number)
    .then((num) => num * 2)
    .then((num) => num - 3)
    .then((result) => {
      console.log("Promise Chaining:", result);
      out.textContent = `Promise Chaining Result: ${result}`;
      updateStatus('success');
    });
}

function runError(inputValue) {
  const out = document.getElementById('output');
  updateStatus('pending');

  new Promise((resolve, reject) => {
    if (!inputValue || inputValue.toLowerCase() === "error") {
      reject("Something went wrong!");
    } else {
      resolve(`You entered: ${inputValue}`);
    }
  })
    .then((msg) => {
      console.log("Success:", msg);
      out.textContent = msg;
      updateStatus('success');
    })
    .catch((err) => {
      console.error("Error Handling:", err);
      out.textContent = `Error: ${err}`;
      updateStatus('error');
    });
}

function runCustom(inputValue) {
  const out = document.getElementById('output');
  updateStatus('pending');

  if (!inputValue) {
    out.textContent = "Please enter some text!";
    updateStatus('error');
    return;
  }

  Promise.resolve(inputValue)
    .then((txt) => txt.toUpperCase())
    .then((result) => {
      console.log("Custom Transformation:", result);
      out.textContent = `Uppercase Result: ${result}`;
      updateStatus('success');
    });
}

function runSelectedTask() {
  const task = document.getElementById('taskSelect').value;
  const inputValue = document.getElementById('userInput').value.trim();

  switch (task) {
    case "basics":
      runBasics(inputValue);
      break;
    case "chaining":
      runChaining(inputValue);
      break;
    case "error":
      runError(inputValue);
      break;
    case "custom":
      runCustom(inputValue);
      break;
    default:
      document.getElementById('output').textContent = "Please select a task!";
      updateStatus('error');
  }
}