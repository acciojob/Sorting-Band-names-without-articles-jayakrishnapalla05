//your code here
function sortBandNames(names){
	return names.sort((a,b) =>{
		const removeArticles=(name) =>(name).replace(/^(a |an |the )/i, '');
		const nameA=removeArticles(a.toLowerCase());
		const nameB=removeArticles(b.toLowerCase());
		return nameA.localeCompare(nameB);
	});
function displayBandNames(names) {
  const ul = document.getElementById('band');
  ul.innerHTML = '';

  // Sort the band names
  const sortedNames = sortBandNames(names);

  // Create and append list items to the HTML list
  sortedNames.forEach((name) => {
    const li = document.createElement('li');
    li.textContent = name;
    ul.appendChild(li);
  });
	
}