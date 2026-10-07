// Progressive enhancement: without JS, every case and explanation is readable.
const missionPicker = document.querySelector(".mission-picker");
const missionButtons = [...missionPicker.querySelectorAll("button")];
const missions = [...document.querySelectorAll(".mission")];
const depthToolbar = document.querySelector(".depth-toolbar");
const depthButtons = [...depthToolbar.querySelectorAll("button")];
const depthPanels = [...document.querySelectorAll(".depth-panel")];
const overviewMaps = [...document.querySelectorAll(".overview-map")];

function selectMission(button) {
  for (const candidate of missionButtons) {
    candidate.setAttribute("aria-selected", String(candidate === button));
    candidate.tabIndex = candidate === button ? 0 : -1;
  }
  for (const mission of missions) {
    mission.hidden = mission.id !== button.getAttribute("aria-controls");
  }
  // Keep the selected tab visible without moving the reader's vertical position.
  const left = button.offsetLeft - missionPicker.offsetLeft;
  const right = left + button.offsetWidth;
  if (left < missionPicker.scrollLeft) missionPicker.scrollLeft = left;
  if (right > missionPicker.scrollLeft + missionPicker.clientWidth) {
    missionPicker.scrollLeft = right - missionPicker.clientWidth;
  }
}
function selectDepth(button) {
  for (const candidate of depthButtons) {
    candidate.setAttribute("aria-pressed", String(candidate === button));
  }
  for (const panel of depthPanels)
    panel.hidden = panel.dataset.depth !== button.dataset.depth;
  for (const map of overviewMaps)
    map.hidden = button.dataset.depth === "engineering";
}
missionPicker.setAttribute("role", "tablist");
for (const [index, button] of missionButtons.entries()) {
  button.setAttribute("role", "tab");
  button.removeAttribute("aria-pressed");
  missions[index].setAttribute("role", "tabpanel");
  missions[index].setAttribute("aria-labelledby", button.id);
  missions[index].tabIndex = 0;
  button.addEventListener("click", () => selectMission(button));
  button.addEventListener("keydown", (event) => {
    let target;
    if (event.key === "ArrowRight")
      target = (index + 1) % missionButtons.length;
    if (event.key === "ArrowLeft")
      target = (index - 1 + missionButtons.length) % missionButtons.length;
    if (event.key === "Home") target = 0;
    if (event.key === "End") target = missionButtons.length - 1;
    if (target === undefined) return;
    event.preventDefault();
    selectMission(missionButtons[target]);
    missionButtons[target].focus({ preventScroll: true });
  });
}
for (const button of depthButtons)
  button.addEventListener("click", () => selectDepth(button));
missionPicker.hidden = false;
depthToolbar.hidden = false;
selectMission(missionButtons[0]);
selectDepth(depthButtons[0]);
