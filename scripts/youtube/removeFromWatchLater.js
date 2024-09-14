// 개선된 YouTube 나중에 볼 동영상 자동 제거 스크립트
// https://www.youtube.com/playlist?list=WL

function removeFromWatchLater() {
  const buttons = document.querySelectorAll(
    "ytd-playlist-video-renderer ytd-menu-renderer #button"
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

  // 팝업 메뉴 열기
  unprocessedButton.click();

  return new Promise((resolve) => {
    setTimeout(() => {
      const menuItems = document.querySelectorAll(
        "ytd-menu-service-item-renderer"
      );

      for (const item of menuItems) {
        const text = item.querySelector("yt-formatted-string")?.textContent;
        if (text && text.includes("나중에 볼 동영상에서 삭제")) {
          console.log(
            "'나중에 볼 동영상에서 삭제' 항목을 찾았습니다. 삭제를 실행합니다."
          );
          item.click();
          resolve(true);
          return;
        }
      }

      console.log(
        "'나중에 볼 동영상에서 삭제' 항목을 찾을 수 없습니다. 메뉴를 닫습니다."
      );
      document.body.click(); // 메뉴 외부를 클릭하여 닫기
      resolve(false);
    }, 500);
  });
}

async function runRemoval() {
  const result = await removeFromWatchLater();
  if (!result) {
    console.log(
      "모든 항목이 처리되었거나 더 이상 처리할 항목이 없습니다. 스크립트를 종료합니다."
    );
    clearInterval(intervalId);
  }
}

// 실행 간격 (밀리초)
const interval = 2000;

// 실행 시간 (분)
const runtime = 5;

// 지정된 간격으로 함수 실행
const intervalId = setInterval(runRemoval, interval);

// 지정된 시간 후 자동 종료
setTimeout(() => {
  clearInterval(intervalId);
  console.log(`스크립트 실행이 ${runtime}분 후 자동 종료되었습니다.`);
}, runtime * 60 * 1000);

console.log(
  `스크립트가 시작되었습니다. ${runtime}분 동안 ${
    interval / 1000
  }초 간격으로 실행됩니다.`
);
