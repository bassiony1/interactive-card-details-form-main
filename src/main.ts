import "./style.css";

const NameInput = document.getElementById("name") as HTMLInputElement;
const CardName = document.getElementById("card-name") as HTMLDivElement;

const NumberInput = document.getElementById("number") as HTMLInputElement;
const CardNumber = document.getElementById("card-number") as HTMLDivElement;
const CVCInput = document.getElementById("cvc-number") as HTMLInputElement;
const CardCVC = document.getElementById("card-cvc") as HTMLDivElement;

const MonthInput = document.getElementById("input-month") as HTMLInputElement;
const YearInput = document.getElementById("input-year") as HTMLInputElement;

const CardMonth = document.getElementById("card-month") as HTMLDivElement;
const CardYear = document.getElementById("card-year") as HTMLDivElement;
const SubmitButton = document.getElementById("submit-btn") as HTMLButtonElement;
const ContinueButton = document.getElementById(
  "continue-btn"
) as HTMLButtonElement;
const Complete = document.getElementById("complete") as HTMLDivElement;
const CardForm = document.getElementById("card-form") as HTMLFormElement;
NameInput.addEventListener("input", () => {
  CardName.innerHTML = `
  <h3 class="text-white uppercase text-sm md:text-lg appear">
  ${NameInput.value}
</h3>
  `;
});

NumberInput.addEventListener("input", () => {
  if (NumberInput.value.length > 16) {
    NumberInput.value = NumberInput.value.slice(0, 16);
    return;
  }
  const value = addSpace(NumberInput.value);

  CardNumber.innerHTML = `<p
  id="card-number"
  class="tracking-widest text-white font-bold w-full text-md md:text-2xl appear overflow-hidden"
>
    ${value}
</p>`;
});

CVCInput.addEventListener("input", () => {
  const value = CVCInput.value;
  if (value.length > 3) {
    CVCInput.value = value.slice(0, 3);
    return;
  }
  CardCVC.innerHTML = `
    <p class="tracking-widest text-neutral-200 text-xs xl:text-xl appear">${value}</p>
    `;
});

YearInput.addEventListener("input", () => {
  const value = YearInput.value;
  if (value.length > 2) {
    YearInput.value = value.slice(0, 2);
    return;
  }
  CardYear.innerHTML = `
  <span class="appear">${value}</span>
        `;
});
MonthInput.addEventListener("input", () => {
  const value = MonthInput.value;
  if (value.length > 2) {
    MonthInput.value = value.slice(0, 2);
    return;
  }
  CardMonth.innerHTML = `
    <span class="appear">${value}</span>
            `;
});
SubmitButton.addEventListener("click", (e) => {
  if (
    !NameInput.value ||
    !NumberInput.value ||
    !CVCInput.value ||
    !MonthInput.value ||
    !YearInput.value
  ) {
    alert("Please fill all the fields");
    return;
  }
  e.preventDefault();
  CardForm.classList.add("hidden");
  CardForm.classList.remove("grid");
  Complete.classList.remove("hidden");
  Complete.classList.add("grid");
});
ContinueButton.addEventListener("click", (e) => {
  e.preventDefault();
  CardForm.classList.remove("hidden");
  CardForm.classList.add("grid");
  Complete.classList.add("hidden");
  Complete.classList.remove("grid");
});
function addSpace(value: string) {
  return value
    .replace(/\s/g, "")
    .replace(/(\d{4})/g, "$1 ")
    .trim();
}
