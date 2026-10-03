// Progressive enhancement: every workflow remains readable without JavaScript.
const missionPicker = document.querySelector(".mission-picker");
const missionButtons = [...missionPicker.querySelectorAll("button")];
const missions = [...document.querySelectorAll(".mission")];

function selectMission(button) {
  for (const candidate of missionButtons) {
    candidate.setAttribute("aria-pressed", String(candidate === button));
  }
  for (const mission of missions) {
    mission.hidden = mission.id !== button.getAttribute("aria-controls");
  }
}

for (const button of missionButtons) {
  button.addEventListener("click", () => selectMission(button));
}
selectMission(missionButtons[0]);
missionPicker.hidden = false;
