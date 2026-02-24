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

  currentStatus = id;

  // add bg color for current button
  selected.classList.remove("bg-transparent", "text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  // filtering button
  if (id == "interview-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
    renderThriving();
  } else if (id == "all-btn") {
    allCards.classList.remove("hidden");
    filterSection.classList.add("hidden");
  } else if (id == "rejected-btn") {
    allCards.classList.add("hidden");
    filterSection.classList.remove("hidden");
  }
}

// event delegation
mainContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const parentNode = event.target.parentNode.parentNode.parentNode;
    //   console.log(parentNode);

    const cardHeader = parentNode.querySelector(".card-header").innerText;
    const cardSubHeader =
      parentNode.querySelector(".card-sub-header").innerText;
    const jobStatus = parentNode.querySelector(".job-status").innerText;
    const cardBadge = parentNode.querySelector(".card-badge").innerText;
    const badgeDesc = parentNode.querySelector(".badge-desc").innerText;
    const interviewBtn = parentNode.querySelector(".interview-btn").innerText;
    const rejectedBtn = parentNode.querySelector(".rejected-btn").innerText;
    //   console.log(interviewBtn, rejectedBtn);

    parentNode.querySelector(".card-badge").innerText = "Interview";

    // create object
    cardInfo = {
      cardHeader,
      cardSubHeader,
      jobStatus,
      cardBadge: "Interview",
      badgeDesc,
      interviewBtn,
      rejectedBtn,
    };

    //   console.log(cardInfo);

    const headerExist = interviewList.find(function (item) {
      return item.cardHeader == cardInfo.cardHeader;
    });

    if (!headerExist) {
      interviewList.push(cardInfo);
    }
    //   console.log("Interview List", interviewList);

    renderInterview();
  }
});

// render interview section
function renderInterview() {
  filterSection.innerHTML = "";

  // create card element
  for (let interview of interviewList) {
    console.log(interview);

    let div = document.createElement("div");
    div.className = "bg-white p-6 flex justify-between rounded-xl";
    div.innerHTML = ` <div class="space-y-5">
            <!-- card heading -->
            <div>
              <h3 class="card-header text-[#002C5C] text-xl font-medium">
                ${interview.cardHeader}
              </h3>
              <p class="card-sub-header text-[#64748B]">
                ${interview.cardSubHeader}
              </p>
            </div>

            <p class="job-status text-sm md:text-[16px] text-[#64748B]">
             ${interview.jobStatus}
            </p>

            <div>
              <span
                class="card-badge text-sm md:text-[16px] text-[#002C5C] font-medium bg-[#EEF4FF] py-2 px-3 rounded-md uppercase"
                >${interview.cardBadge}</span
              >
              <p class="badge-desc text-sm md:text-[16px] text-[#323B49] mt-3">
                ${interview.badgeDesc}
              </p>
            </div>

            <!-- Buttons -->
            <div class="buttons flex gap-2">
              <button
                class="interview-btn btn border border-[#10B981] text-[#10B981] hover:bg-[#10B981] hover:text-white"
              >
                Interview
              </button>
              <button
                class="rejected-btn btn border border-[#EF4444] text-[#EF4444] hover:bg-[#EF4444] hover:text-white"
              >
                Rejected
              </button>
            </div>
          </div>
          <div>
            <button
              id=""
              class="delete-btn btn w-8 h-8 border border-[#F1F2F4] bg-transparent p-2 rounded-full"
            >
              <i class="fa-solid fa-trash-can"></i>
            </button>
          </div>`;
    filterSection.appendChild(div);
  }
}
