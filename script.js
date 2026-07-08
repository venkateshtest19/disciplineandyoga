// Auto-update year in footer
document.getElementById('year')?.textContent = new Date().getFullYear();

// Auto-update "Last updated" date on policy pages
const updateDate = document.getElementById('update-date');
if (updateDate) {
  updateDate.textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Form handling - redirect to Thankyou.html on submit
const enrollmentForm = document.getElementById('enrollment-form');
if (enrollmentForm) {
  enrollmentForm.addEventListener('submit', (e) => {
    // 🎯 GOOGLE ADS CONVERSION (add your ID later)
    // gtag('event', 'conversion', {'send_to': 'AW-XXXXXXXXX/YYYYYYY'});
    
    // For now: form will naturally redirect to Thankyou.html via action attribute
    // In future: integrate with Google Forms or backend here
  });
}

// Smooth scroll for anchor links (only on index.html)
if (window.location.pathname.includes('index.html') || window.location.pathname === '/' || window.location.pathname === '') {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// Form validation enhancements
if (enrollmentForm) {
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function() {
      // Allow only numbers, spaces, +, -, (, )
      this.value = this.value.replace(/[^0-9+\-\s()]/g, '');
    });
  }
}
