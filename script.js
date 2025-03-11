document.addEventListener('DOMContentLoaded', function() {
    // Form elements
    const formStep1 = document.getElementById('formStep1');
    const formStep2 = document.getElementById('formStep2');
    const formStep3 = document.getElementById('formStep3');
    const successMessage = document.getElementById('successMessage');
    
    // Progress bar elements
    const progressBarFill = document.getElementById('progressBarFill');
    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const step3 = document.getElementById('step3');
    const stepLabel1 = document.getElementById('stepLabel1');
    const stepLabel2 = document.getElementById('stepLabel2');
    const stepLabel3 = document.getElementById('stepLabel3');
    
    // Navigation buttons
    const nextToStep2 = document.getElementById('nextToStep2');
    const backToStep1 = document.getElementById('backToStep1');
    const nextToStep3 = document.getElementById('nextToStep3');
    const backToStep2 = document.getElementById('backToStep2');
    const submitForm = document.getElementById('submitForm');
    
    // Form inputs
    const inputs = document.querySelectorAll('input, textarea, select');
    
    // Add focus animation to form fields
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.closest('.form-group').classList.remove('focused');
        });
    });
    
    // Update progress bar
    function updateProgressBar(step) {
        if (step === 1) {
            progressBarFill.style.width = '0%';
            
            step1.classList.add('active');
            step2.classList.remove('active', 'completed');
            step3.classList.remove('active', 'completed');
            
            stepLabel1.classList.add('active');
            stepLabel2.classList.remove('active');
            stepLabel3.classList.remove('active');
        } else if (step === 2) {
            progressBarFill.style.width = '50%';
            
            step1.classList.add('completed');
            step2.classList.add('active');
            step3.classList.remove('active', 'completed');
            
            stepLabel1.classList.remove('active');
            stepLabel2.classList.add('active');
            stepLabel3.classList.remove('active');
        } else if (step === 3) {
            progressBarFill.style.width = '100%';
            
            step1.classList.add('completed');
            step2.classList.add('completed');
            step3.classList.add('active');
            
            stepLabel1.classList.remove('active');
            stepLabel2.classList.remove('active');
            stepLabel3.classList.add('active');
        }
    }
    
    // Validate step 1
    function validateStep1() {
        let isValid = true;
        
        // Validate full name
        const fullName = document.getElementById('fullName');
        const fullNameError = document.getElementById('fullNameError');
        if (!fullName.value.trim()) {
            fullNameError.style.display = 'block';
            fullName.classList.add('error');
            isValid = false;
        } else {
            fullNameError.style.display = 'none';
            fullName.classList.remove('error');
        }
        
        // Validate gender
        const gender = document.querySelector('input[name="gender"]:checked');
        const genderError = document.getElementById('genderError');
        if (!gender) {
            genderError.style.display = 'block';
            isValid = false;
        } else {
            genderError.style.display = 'none';
        }
        
        // Validate class
        const classInput = document.getElementById('class');
        const classError = document.getElementById('classError');
        if (!classInput.value.trim()) {
            classError.style.display = 'block';
            classInput.classList.add('error');
            isValid = false;
        } else {
            classError.style.display = 'none';
            classInput.classList.remove('error');
        }
        
        // Validate student ID
        const studentId = document.getElementById('studentId');
        const studentIdError = document.getElementById('studentIdError');
        if (!studentId.value.trim()) {
            studentIdError.style.display = 'block';
            studentId.classList.add('error');
            isValid = false;
        } else {
            studentIdError.style.display = 'none';
            studentId.classList.remove('error');
        }
        
        return isValid;
    }
    
    // Validate step 2
    function validateStep2() {
        let isValid = true;
        
        // Validate phone
        const phone = document.getElementById('phone');
        const phoneError = document.getElementById('phoneError');
        const phoneRegex = /^[0-9]{10}$/;
        if (!phone.value.trim() || !phoneRegex.test(phone.value.trim())) {
            phoneError.style.display = 'block';
            phone.classList.add('error');
            isValid = false;
        } else {
            phoneError.style.display = 'none';
            phone.classList.remove('error');
        }
        
        // Validate email
        const email = document.getElementById('email');
        const emailError = document.getElementById('emailError');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
            emailError.style.display = 'block';
            email.classList.add('error');
            isValid = false;
        } else {
            emailError.style.display = 'none';
            email.classList.remove('error');
        }
        
        // Validate Facebook (optional)
        const facebook = document.getElementById('facebook');
        const facebookError = document.getElementById('facebookError');
        if (facebook.value.trim() && !facebook.value.trim().includes('facebook.com')) {
            facebookError.style.display = 'block';
            facebook.classList.add('error');
            isValid = false;
        } else {
            facebookError.style.display = 'none';
            facebook.classList.remove('error');
        }
        
        // Validate department
        const department = document.getElementById('department');
        const departmentError = document.getElementById('departmentError');
        if (!department.value) {
            departmentError.style.display = 'block';
            department.classList.add('error');
            isValid = false;
        } else {
            departmentError.style.display = 'none';
            department.classList.remove('error');
        }
        
        return isValid;
    }
    
    // Validate step 3
    function validateStep3() {
        let isValid = true;
        
        // Validate strengths
        const strengths = document.getElementById('strengths');
        const strengthsError = document.getElementById('strengthsError');
        if (!strengths.value.trim()) {
            strengthsError.style.display = 'block';
            strengths.classList.add('error');
            isValid = false;
        } else {
            strengthsError.style.display = 'none';
            strengths.classList.remove('error');
        }
        
        // Validate weaknesses
        const weaknesses = document.getElementById('weaknesses');
        const weaknessesError = document.getElementById('weaknessesError');
        if (!weaknesses.value.trim()) {
            weaknessesError.style.display = 'block';
            weaknesses.classList.add('error');
            isValid = false;
        } else {
            weaknessesError.style.display = 'none';
            weaknesses.classList.remove('error');
        }
        
        // Validate confirmation
        const confirmation = document.getElementById('confirmation');
        const confirmationError = document.getElementById('confirmationError');
        if (!confirmation.checked) {
            confirmationError.style.display = 'block';
            isValid = false;
        } else {
            confirmationError.style.display = 'none';
        }
        
        return isValid;
    }
    
    // Navigation event listeners
    nextToStep2.addEventListener('click', function() {
        if (validateStep1()) {
            formStep1.classList.remove('active');
            formStep2.classList.add('active');
            updateProgressBar(2);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    backToStep1.addEventListener('click', function() {
        formStep2.classList.remove('active');
        formStep1.classList.add('active');
        updateProgressBar(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    nextToStep3.addEventListener('click', function() {
        if (validateStep2()) {
            formStep2.classList.remove('active');
            formStep3.classList.add('active');
            updateProgressBar(3);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
    
    backToStep2.addEventListener('click', function() {
        formStep3.classList.remove('active');
        formStep2.classList.add('active');
        updateProgressBar(2);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    submitForm.addEventListener('click', function() {
        if (validateStep3()) {
            // Collect all form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                gender: document.querySelector('input[name="gender"]:checked').value,
                class: document.getElementById('class').value,
                studentId: document.getElementById('studentId').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                facebook: document.getElementById('facebook').value,
                department: document.getElementById('department').value,
                strengths: document.getElementById('strengths').value,
                weaknesses: document.getElementById('weaknesses').value,
                confirmation: document.getElementById('confirmation').checked
            };
            
            console.log('Form submitted successfully', formData);
            
            // Show success message with animation
            formStep3.style.opacity = '0';
            formStep3.style.transform = 'translateY(20px)';
            formStep3.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                formStep3.style.display = 'none';
                successMessage.style.display = 'block';
            }, 500);
        }
    });
    
    // Click on steps to navigate (if previous steps are valid)
    step1.addEventListener('click', function() {
        formStep2.classList.remove('active');
        formStep3.classList.remove('active');
        formStep1.classList.add('active');
        updateProgressBar(1);
    });
    
    step2.addEventListener('click', function() {
        if (validateStep1()) {
            formStep1.classList.remove('active');
            formStep3.classList.remove('active');
            formStep2.classList.add('active');
            updateProgressBar(2);
        }
    });
    
    step3.addEventListener('click', function() {
        if (validateStep1() && validateStep2()) {
            formStep1.classList.remove('active');
            formStep2.classList.remove('active');
            formStep3.classList.add('active');
            updateProgressBar(3);
        }
    });
    
    // Initialize form
    updateProgressBar(1);
    
    // Add animation to info cards on scroll
    const infoCards = document.querySelectorAll('.info-card');
    const deadlineCard = document.querySelector('.deadline-card');

    function checkScroll() {
        const triggerBottom = window.innerHeight * 0.8;

        infoCards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });

        if (deadlineCard) {
            const deadlineTop = deadlineCard.getBoundingClientRect().top;

            if (deadlineTop < triggerBottom) {
                deadlineCard.style.opacity = '1';
                deadlineCard.style.transform = 'translateY(0)';
            }
        }
    }

    // Set initial state for animation
    infoCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
    });

    if (deadlineCard) {
        deadlineCard.style.opacity = '0';
        deadlineCard.style.transform = 'translateY(20px)';
        deadlineCard.style.transition = 'all 0.6s ease';
    }

    // Check on load and scroll
    window.addEventListener('scroll', checkScroll);
    checkScroll();
});