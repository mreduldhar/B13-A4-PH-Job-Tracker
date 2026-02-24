let currentStatus = "all";
let interviewList = [];
let rejectedList = [];

// get all filtered button elements
let allBtn = document.getElementById("all-btn");
let interviewBtn = document.getElementById("interview-btn");
let rejectedBtn = document.getElementById("rejected-btn");

// get tracker card elements
let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectCount = document.getElementById("reject-count");

// console.log(totalCount, interviewCount, rejectCount);

const allCards = document.getElementById("allCards");
const mainContainer = document.getElementById("main");
const filterSection = document.getElementById("filtered-section");

// calculate count
function calculateCount() {
  totalCount.innerText = allCards.children.length;
  interviewCount.innerText = interviewList.length;
  rejectCount.innerText = rejectedList.length;
}
calculateCount();

// handle toggle button
function toggleButton(id) {
  allBtn.classList.add("bg-transparent", "text-[#64748B]");
  interviewBtn.classList.add("bg-transparent", "text-[#64748B]");
  rejectedBtn.classList.add("bg-transparent", "text-[#64748B]");

  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  //   console.log("current btn: ", id);
  const selected = document.getElementById(id);

  // add bg color for current button
  selected.classList.remove("bg-transparent", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");
}
