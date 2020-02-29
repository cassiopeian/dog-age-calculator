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
    // This calculates your final dog age
    
    $('#dog-quote').fadeIn(2000).html(`Wow! You're <span id='your-result'>${yourAgeInDogYears} years old</span> in dog years, <span id='neon-underline'>not ${yourAge}</span>. `);
    //This replaces the dog's original message and tells you your age in dog years

    /* -- THE FOLLOWING WILL APPEND AGE-SPECIFIC FINAL SENTENCES TO THE CALCULATED DOG QUOTE -- */

    let tween = ['Hope you\'ve been taking your vitamins...', 'Life comes at you fast!', 'Tell your mom you\'re an adult now!'];
    let teen = ['You\'re almost 100!', 'Lookin\' good for your age!', 'Hey, what moisturizer do you use?'];
    let youngAdult = ['That was a quick century, huh?', 'You\'re ancient!', 'Welcome to your golden years!'];
    let adult = ['You can retire! Yay!', 'With age comes wisdom, and you\'re OLD!', 'Is that a gray hair on your muzzle?'];
    let senior = ['You\'re gonna live forever!', 'The centuries are flying by!', 'You don\'t look a day over 200!'];
    // These arrays contain blocks of phrases for five age groups 

    let randomTween = tween[Math.floor(Math.random() * tween.length)];
    let randomTeen = teen[Math.floor(Math.random() * teen.length)];
    let randomYoungAdult = youngAdult[Math.floor(Math.random() * youngAdult.length)];
    let randomAdult = adult[Math.floor(Math.random() * adult.length)];
    let randomSenior = senior[Math.random(Math.floor() * senior.length)];
    // This makes it possible to randomly select phrases from each of the five arrays above

    if (yourAge >= 1 && yourAge <= 14) {
        $('#dog-quote').append(randomTween);
    } else if (yourAge >= 15 && yourAge <= 21) {
        $('#dog-quote').append(randomTeen);
    } else if (yourAge >= 22 && yourAge <= 30) {
        $('#dog-quote').append(randomYoungAdult);
    } else if (yourAge >= 31 && yourAge <= 60) {
        $('#dog-quote').append(randomAdult);
    } else if (yourAge >= 61) {
        $('#dog-quote').append(randomSenior);
    }
    // The conditional statements above will append a random sentence that is appropriate to the relevant age group
});
