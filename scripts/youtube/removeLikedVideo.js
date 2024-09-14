// YouTube 좋아요 표시한 동영상 동적 제거 스크립트
// https://www.youtube.com/playlist?list=LL

function removeLikedVideo() {
  const buttons = document.querySelectorAll(
    "ytd-playlist-video-renderer yt-icon-button.dropdown-trigger"
  );

  // 처리되지 않은 첫 번째 버튼 찾기
  const unprocessedButton = Array.from(buttons).find(
    (button) => !button.hasAttribute("data-processed")
  );

  if (!unprocessedButton) {
    console.log("처리할 항목이 더 이상 없습니다.");
    return false;
  }

  // 버튼에 처리 표시
  unprocessedButton.setAttribute("data-processed", "true");

  // 버튼 클릭
  unprocessedButton.click();

  setTimeout(() => {
    const menuItems = document.querySelectorAll(
      "ytd-menu-service-item-renderer"
    );

    for (const item of menuItems) {
      const text = item.querySelector("yt-formatted-string")?.textContent;
      if (text && text.includes("좋아요 표시한 동영상에서 삭제")) {
        console.count("제거");
        item.click();
        return;
      }
    }

    console.log(
      "'좋아요 표시한 동영상에서 삭제' 항목을 찾을 수 없습니다. 메뉴를 닫습니다."
    );
    document.body.click(); // 메뉴 외부를 클릭하여 닫기
  }, 200);

  return true;
}

function runRemoval() {
  if (!removeLikedVideo()) {
    console.log(
      "모든 항목이 처리되었거나 더 이상 처리할 항목이 없습니다. 스크립트를 종료합니다."
    );
    clearInterval(intervalId);
  }
}

// 1초마다 함수 실행
const intervalId = setInterval(runRemoval, 1000);

// 5분 후 자동 종료 (필요에 따라 조정 가능)
setTimeout(() => {
  clearInterval(intervalId);
  console.log("스크립트 실행이 5분 후 자동 종료되었습니다.");
}, 5 * 60 * 1000);

console.log(
  "스크립트가 시작되었습니다. 1초 간격으로 실행되며, 5분 후 자동 종료됩니다."
);
