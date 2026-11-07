// ShopSphere - Authentication Script (Login & Register)

function fillDemoLogin(role) {
  const emailInput = document.getElementById('login-email');
  const passInput = document.getElementById('login-password');
  if (!emailInput || !passInput) return;

  if (role === 'admin') {
    emailInput.value = 'admin@shopsphere.com';
    passInput.value = 'admin123';
    showToast('Loaded Demo Admin credentials', 'info');
  } else {
    emailInput.value = 'customer@shopsphere.com';
    passInput.value = 'password123';
    showToast('Loaded Demo Customer credentials', 'info');
  }
}

function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;

  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-regular fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-regular fa-eye"></i>';
  }
}

// Handle Login
async function handleLoginSubmit(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value.trim();
  const password = document.getElementById('login-password').value;
  const submitBtn = document.getElementById('login-submit-btn');

  if (!email || !password) {
    showToast('Please enter both email and password', 'warning');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Signing In...';

  try {
    const res = await api.auth.login({ email, password });
    localStorage.setItem('shopsphere_token', res.token);
    localStorage.setItem('shopsphere_user', JSON.stringify(res.user));

    showToast(`Welcome back, ${res.user.name}!`, 'success');

    setTimeout(() => {
      if (res.user.role === 'admin') {
        window.location.href = '/admin.html';
      } else {
        const returnUrl = new URLSearchParams(window.location.search).get('returnUrl');
        window.location.href = returnUrl || '/index.html';
      }
    }, 600);
  } catch (err) {
    showToast(err.message || 'Login failed', 'error');
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Sign In';
  }
}

// Handle Register
async function handleRegisterSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const phone = document.getElementById('reg-phone').value.trim();
  const password = document.getElementById('reg-password').value;
  const confirmPass = document.getElementById('reg-confirm-password').value;
  const submitBtn = document.getElementById('reg-submit-btn');

  if (!name || !email || !password) {
    showToast('Please fill out all required fields', 'warning');
    return;
  }

  if (password.length < 6) {
    showToast('Password must be at least 6 characters', 'warning');
    return;
  }

  if (password !== confirmPass) {
    showToast('Passwords do not match', 'error');
    return;
  }

  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Creating Account...';

  try {
    const res = await api.auth.register({ name, email, password, phone });
    localStorage.setItem('shopsphere_token', res.token);
    localStorage.setItem('shopsphere_user', JSON.stringify(res.user));

    showToast('Account created successfully! Welcome to ShopSphere.', 'success');

    setTimeout(() => {
      window.location.href = '/index.html';
    }, 600);
  } catch (err) {
    showToast(err.message || 'Registration failed', 'error');
    submitBtn.disabled = false;
    submitBtn.innerHTML = 'Create Account';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  if (loginForm) loginForm.addEventListener('submit', handleLoginSubmit);

  const regForm = document.getElementById('register-form');
  if (regForm) regForm.addEventListener('submit', handleRegisterSubmit);
});
