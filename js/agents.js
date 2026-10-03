// All case studies and explanations remain readable without JavaScript.
const missionPicker = document.querySelector(".mission-picker");
const missionButtons = [...missionPicker.querySelectorAll("button")];
const missions = [...document.querySelectorAll(".mission")];
const depthToolbar = document.querySelector(".depth-toolbar");
const depthButtons = [...depthToolbar.querySelectorAll("button")];
const depthPanels = [...document.querySelectorAll(".depth-panel")];
const overviewMaps = [...document.querySelectorAll(".overview-map")];

function selectMission(button) {
  for (const candidate of missionButtons) {
    candidate.setAttribute("aria-pressed", String(candidate === button));
  }
  for (const mission of missions) {
    mission.hidden = mission.id !== button.getAttribute("aria-controls");
  }
}

function selectDepth(button) {
  const depth = button.dataset.depth;
  for (const candidate of depthButtons) {
    candidate.setAttribute("aria-pressed", String(candidate === button));
  }
  for (const panel of depthPanels) {
    panel.hidden = panel.dataset.depth !== depth;
  }
  for (const map of overviewMaps) {
    map.hidden = depth === "engineering";
  }
}

for (const button of missionButtons) {
  button.addEventListener("click", () => selectMission(button));
}
for (const button of depthButtons) {
  button.addEventListener("click", () => selectDepth(button));
}
selectMission(missionButtons[0]);
selectDepth(depthButtons[0]);
missionPicker.hidden = false;
depthToolbar.hidden = false;
