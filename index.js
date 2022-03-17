let content = document.querySelector('.js-generated.content')
//for the h1
let header = document.createElement('h1')
header.setAttribute('class', 'dog-name')
header.append('Rizzo')
content.append(header)
// for div .dog-deatails
let dogDiv = document.createElement('div')
dogDiv.setAttribute('class', 'dog-content')
content.append(dogDiv)
//img inside .dog-details 
let photo = document.createElement('img')
photo.setAttribute('class', 'dog-image')
photo.setAttribute('src','./assets/rizzo.jpg')
dogDiv.append(photo)
//div inside .dog-details
let details = document.createElement('div')
details.setAttribute('class', 'dog-details')
dogDiv.append(details)
//h3 inside .dog-details
let descHeader = document.createElement('h3')
descHeader.append('Description:')
details.append(descHeader)
//p under h3
let words = document.createElement('p')
words.append('This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals')
details.append(words)
//h3 under p
let times = document.createElement('h3')
times.append('Feeding Times:')
details.append(times)
//ul for times
let list = document.createElement('ul')
details.append(list)
//feeding times
let nine = document.createElement('li')
nine.append('9:00 AM')
list.append(nine)
let twelve = document.createElement('li')
twelve.append('12:00 PM')
list.append(twelve)
let five = document.createElement('li')
five.append('5:00 PM')
list.append(five)