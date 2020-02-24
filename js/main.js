$('#submit').on('click', function() {
    let yourAge = Number($('#age').val());
    // Age is given as an input by the user

    let earlyYears = 2;
    earlyYears = earlyYears * 10.5;
    // Dogs age 10.5 years in their first two years 

    let laterYears = yourAge - 2;
    // This will subtract those first two years, so the value of laterYears is accurate

    laterYears *= 4;
    // Dogs age 4x faster than us after their first two years

    let yourAgeInDogYears = earlyYears + laterYears;
    
    $('#dog-quote').html(`Wow! You're ${yourAgeInDogYears} years old in dog years, not ${yourAge}. That's old!`);
});
