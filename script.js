/* VELORA prototype interactions mapped to the user's Figma connection overview. */
const screens = {
  welcome: {
    title: 'Welcome', description: 'Start your VELORA shopping journey.', image: 'welcome.png', alt: 'VELORA welcome screen',
    spots: [
      [11, 72, 78, 10, 'Get started', 'signup'],
      [22, 84, 56, 8, 'Already have an account? Log in', 'login']
    ]
  },
  signup: {
    title: 'Sign up', description: 'Create an account or switch to the login screen.', image: 'signup.png', alt: 'VELORA sign-up screen',
    spots: [
      [13, 23, 34, 7, 'Login tab', 'login'],
      [54, 23, 34, 7, 'Sign up tab', 'signup'],
      [14, 54, 74, 8, 'Sign up and continue to home', 'home'],
      [17, 89, 68, 7, 'Already have an account? Log in', 'login']
    ]
  },
  login: {
    title: 'Log in', description: 'Log in or switch to the sign-up screen.', image: 'login.png', alt: 'VELORA login screen',
    spots: [
      [13, 23, 34, 7, 'Login tab', 'login'],
      [54, 23, 34, 7, 'Sign up tab', 'signup'],
      [14, 54, 74, 8, 'Log in and continue to home', 'home'],
      [17, 89, 68, 7, 'Do not have an account? Sign up', 'signup']
    ]
  },
  home: {
    title: 'Home', description: 'Browse featured styles, open product details, or use the bottom navigation.', image: 'home.png', alt: 'VELORA home screen',
    spots: [
      [10, 69, 38, 20, 'Open elegant midi dress', 'dress'],
      [52, 69, 38, 20, 'Open elegant coat suit', 'coat'],
      [0, 89, 25, 10, 'Home tab', 'home'],
      [25, 89, 25, 10, 'Wishlist tab', 'wishlist'],
      [50, 89, 25, 10, 'Shopping bag tab', 'bag'],
      [75, 89, 25, 10, 'Profile tab', 'profile'],
      [82, 5, 14, 8, 'Wishlist shortcut', 'wishlist']
    ]
  },
  dress: {
    title: 'Elegant Midi Dress', description: 'Save the dress to your wishlist or add it to your shopping bag.', image: 'dress-detail.png', alt: 'VELORA elegant midi dress product detail',
    spots: [
      [80, 5, 16, 9, 'Add dress to wishlist', 'wishlist'],
      [9, 90, 82, 8, 'Add dress to bag', 'bag'],
      [3, 4, 15, 8, 'Back to home', 'home']
    ]
  },
  coat: {
    title: 'Elegant Coat Suit', description: 'Save the coat suit to your wishlist or add it to your shopping bag.', image: 'coat-detail.png', alt: 'VELORA elegant coat suit product detail',
    spots: [
      [80, 5, 16, 9, 'Add coat suit to wishlist', 'wishlist'],
      [9, 90, 82, 8, 'Add coat suit to bag', 'bag'],
      [3, 4, 15, 8, 'Back to home', 'home']
    ]
  },
  wishlist: {
    title: 'Wishlist', description: 'Open a saved product or navigate to another section.', image: 'wishlist.png', alt: 'VELORA wishlist screen',
    spots: [
      [5, 20, 43, 22, 'Open elegant midi dress', 'dress'],
      [5, 44, 43, 22, 'Open elegant coat suit', 'coat'],
      [5, 68, 43, 19, 'Open formal shirt', 'dress'],
      [0, 89, 25, 10, 'Home tab', 'home'],
      [25, 89, 25, 10, 'Wishlist tab', 'wishlist'],
      [50, 89, 25, 10, 'Shopping bag tab', 'bag'],
      [75, 89, 25, 10, 'Profile tab', 'profile']
    ]
  },
  bag: {
    title: 'Shopping Bag', description: 'Review the selected items and continue to checkout.', image: 'bag.png', alt: 'VELORA shopping bag screen',
    spots: [
      [5, 17, 43, 25, 'Open elegant midi dress', 'dress'],
      [5, 45, 43, 26, 'Open elegant coat suit', 'coat'],
      [15, 78, 70, 10, 'Buy now and go to checkout', 'checkout'],
      [0, 89, 25, 10, 'Home tab', 'home'],
      [25, 89, 25, 10, 'Wishlist tab', 'wishlist'],
      [50, 89, 25, 10, 'Shopping bag tab', 'bag'],
      [75, 89, 25, 10, 'Profile tab', 'profile']
    ]
  },
  profile: {
    title: 'Profile', description: 'View your profile details and open your wishlist.', image: 'profile.png', alt: 'VELORA profile screen',
    spots: [
      [12, 65, 76, 15, 'Open wishlist', 'wishlist'],
      [0, 89, 25, 10, 'Home tab', 'home'],
      [25, 89, 25, 10, 'Wishlist tab', 'wishlist'],
      [50, 89, 25, 10, 'Shopping bag tab', 'bag'],
      [75, 89, 25, 10, 'Profile tab', 'profile']
    ]
  },
  checkout: {
    title: 'Checkout', description: 'Review the delivery and payment details, then place the order.', image: 'checkout.png', alt: 'VELORA checkout screen',
    spots: [[7, 90, 86, 8, 'Place order', 'success']]
  },
  success: {
    title: 'Order placed', description: 'Your demo order is complete. Return home to explore again.', image: 'order-confirmation.png', alt: 'VELORA order confirmation screen',
    spots: [[15, 83, 72, 10, 'Back to home', 'home']]
  }
};

const image = document.getElementById('screen-image');
const hotspotLayer = document.getElementById('hotspots');
const title = document.getElementById('screen-title');
const description = document.getElementById('screen-description');
const pickerButtons = [...document.querySelectorAll('.screen-picker button')];
let currentScreen = 'welcome';

function showScreen(key) {
  const screen = screens[key] || screens.welcome;
  currentScreen = key;
  image.src = `assets/${screen.image}`;
  image.alt = screen.alt;
  title.textContent = screen.title;
  description.textContent = screen.description;
  hotspotLayer.replaceChildren();
  screen.spots.forEach(([x, y, width, height, label, target]) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'hotspot';
    button.setAttribute('aria-label', label);
    button.title = label;
    button.style.left = `${x}%`;
    button.style.top = `${y}%`;
    button.style.width = `${width}%`;
    button.style.height = `${height}%`;
    button.addEventListener('click', () => showScreen(target));
    hotspotLayer.append(button);
  });
  pickerButtons.forEach(button => button.classList.toggle('active', button.dataset.screen === key));
  document.getElementById('device').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

pickerButtons.forEach(button => button.addEventListener('click', () => showScreen(button.dataset.screen)));
document.getElementById('restart').addEventListener('click', () => showScreen('welcome'));
showScreen('welcome');
