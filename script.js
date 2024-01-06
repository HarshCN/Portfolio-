function toggleFullScreen(element) {
    if (!document.fullscreenElement) {
      // If not in fullscreen, request fullscreen
      element.classList.add('fullscreen');
      element.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      // If in fullscreen, exit fullscreen
      document.exitFullscreen();
      element.classList.remove('fullscreen');
    }
  }
