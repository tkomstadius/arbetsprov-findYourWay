const london = {
  name: 'London',
  importantHeading: 'Finansiellt centrum',
  importantText: 'London är ett av världens största finansiella centra inom internationella affärer och internationell handel. Tillsammans med New York ses London som det viktigaste finanscentrat i världen.',
  withImageHeading: 'Hamnstaden vid Themsen',
  withImageText: 'London är huvudstaden i Storbritannien. Staden grundades under namnet Londinium som huvudstad i den romerska provinsen Britannia, för vilken den också utgjorde hamnstad vid floden Themsen.',
  imagePath: 'assets/london.jpg',
  regularHeading: 'City of London',
  regularText: 'City of London är Londons historiska centrum och är en egen stad inom Storlondon, med speciella rättigheter som Storlondons 32 kommuner (boroughs) inte åtnjuter.'
}

function doSearch() {
  event.preventDefault()
  let searchInput = document.querySelector('.search-form__input')

  dummyResult(searchInput.value)

  document.querySelector('.search-result').focus()
}

function dummyResult(searchValue) {
  if(searchValue.toLowerCase() === 'london') {
    let heading = document.querySelector('.search-result__heading--bold')
    heading.innerHTML = london.name

    let important = document.querySelector('.info-box--important')
    let withImage = document.querySelector('.info-box--flex-content')
    let regular = document.querySelector('.info-box__regular')

    important.querySelector('h2').innerHTML = london.importantHeading
    important.querySelector('p').innerHTML = london.importantText

    withImage.querySelector('h2').innerHTML = london.withImageHeading
    withImage.querySelector('p').innerHTML = london.withImageText
    withImage.querySelector('img').setAttribute('src', london.imagePath)

    regular.querySelector('h2').innerHTML = london.regularHeading
    regular.querySelector('p').innerHTML = london.regularText

    let searchResult = document.querySelector('.search_result__info')
    searchResult.insertBefore(withImage, important)
  }
}

function toggle(toClickId, toToggleId) {

  let clickElement = document.getElementById(toClickId)
  let toggleElement = document.getElementById(toToggleId)

  if(toggleElement.style.display === 'none') {
    toggleElement.style.display = ''
    clickElement.setAttribute('aria-expanded', true)
  } else {
    toggleElement.style.display = 'none'
    clickElement.setAttribute('aria-expanded', false)
  }

}
