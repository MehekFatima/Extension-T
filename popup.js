document.addEventListener('DOMContentLoaded', function() {
  var pickTitleBtn = document.getElementById('pickTitleBtn');
  var titleContainer = document.getElementById('titleContainer');
  var titleElement = document.getElementById('title');

  pickTitleBtn.addEventListener('click', function() {
      chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
          if (tabs.length > 0) {
              var tab = tabs[0];
              var title = tab.title;
              titleElement.textContent = title || 'No Title Found';
              titleContainer.style.display = 'block';
          } else {
              titleElement.textContent = 'No Tab Found';
              titleContainer.style.display = 'block';
          }
      });
  });
});
