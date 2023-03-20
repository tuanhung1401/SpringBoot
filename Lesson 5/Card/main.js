// Thêm tính năng mới vào gói Pro: '24/7 Phone support'
let proPlan = document.getElementById('pro-plan')
let proPlanFeatures = proPlan.querySelector('ul')
let supportFeature = document.createElement('li')
supportFeature.innerText = '24/7 Phone support'
proPlanFeatures.appendChild(supportFeature)


// Đổi vị trí 2 card pricing
let basicPlan = document.getElementById('basic-plan')
basicPlan.insertAdjacentElement('beforebegin', proPlan)


// Thay đổi nút Get Started của gói Pro 
let proPlanButton = proPlan.querySelector('button')
proPlanButton.classList.remove('btn-outline-primary')
proPlanButton.classList.add('btn-primary')
proPlanButton.style.backgroundColor = '#0984e3'
proPlanButton.style.color = '#fff'
proPlanButton.innerText = 'Buy Now'


// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
let basicStorage = basicPlan.querySelector('.storage-amount')
let basicStorageValue = parseInt(basicStorage.innerText)
let proStorage = proPlan.querySelector('.storage-amount')
let proStorageValue = parseInt(proStorage.innerText)

basicStorage.innerText = `${basicStorageValue * 1.5}`
proStorage.innerText = `${proStorageValue * 1.25}`

