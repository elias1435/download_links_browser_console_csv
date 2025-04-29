(() => {
  const allLinks = Array.from(document.querySelectorAll('a'))
    .map(a => a.href)
    .filter(href => href.startsWith('https://hoteldesigns.net/'));

  if (allLinks.length === 0) {
    console.log('No links found.');
    return;
  }

  const csvContent = "data:text/csv;charset=utf-8," + allLinks.map(link => `"${link}"`).join("\n");
  const encodedUri = encodeURI(csvContent);
  
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "hoteldesigns_links.csv");
  document.body.appendChild(link);

  link.click();
  document.body.removeChild(link);
})();
