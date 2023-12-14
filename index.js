function openTab(tabId) {
    // Hide all tab contents
    const tabContents = document.getElementsByClassName('tab-content');
    for (const tabContent of tabContents) {
        tabContent.classList.remove('active');
    }

    // Show the selected tab content
    const selectedTabContent = document.getElementById(tabId + 'Content');
    selectedTabContent.classList.add('active');
}