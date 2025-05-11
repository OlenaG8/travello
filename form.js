document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('reservationForm');
    const steps = [...document.querySelectorAll('.form-step')];
    const progressSteps = [...document.querySelectorAll('.progress-step')];
    let currentStep = 0;

    initDateSelectors();
    showStep(currentStep);

    document.querySelectorAll('.next-btn').forEach(btn =>
        btn.addEventListener('click', () => {
        if (!validateStep(steps[currentStep])) return;
        if (++currentStep >= steps.length) return form.submit();
        showStep(currentStep);
        updateProgress();
        })
    );

    document.querySelectorAll('.prev-btn').forEach(btn =>
        btn.addEventListener('click', () => {
        currentStep = Math.max(0, currentStep - 1);
        showStep(currentStep);
        updateProgress();
        })
    );

    function showStep(step) {
        steps.forEach((el, i) => el.classList.toggle('active', i === step));
    }

    function validateStep(stepEl) {
        const fields = stepEl.querySelectorAll('input[required], select[required]');
        let valid = true;

        fields.forEach(field => {
        const isEmpty = !field.value.trim();
        field.classList.toggle('valid', !isEmpty);
        field.classList.toggle('invalid', isEmpty);
        valid = valid && !isEmpty;
        });

        return valid;
    }

    function updateProgress() {
        progressSteps.forEach((el, i) => el.classList.toggle('active', i <= currentStep));
    }

    function initDateSelectors() {
        const currentYear = new Date().getFullYear();
        const fillSelect = (selector, values) => {
        document.querySelectorAll(selector).forEach(sel => {
            sel.length = 1;
            values.forEach(val => sel.add(new Option(val, val)));
        });
        };

        fillSelect('.day-select', Array.from({ length: 31 }, (_, i) => i + 1));
        fillSelect('.year-select', Array.from({ length: currentYear - 1899 }, (_, i) => currentYear - i));
    }
});
