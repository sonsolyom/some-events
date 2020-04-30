$('.first-btn').click(() => {
    if ($('.first-btn').text() !== 'How dare you!?')
    console.log('Yeah, you clicked me');
    else
    console.log('Don\'t be ridicoulos...');
    
});

$('.second-btn').click(() => {
    if ($('.first-btn').text() !== 'How dare you!?'){
        $('.first-btn').text('How dare you!?');
    }else {
        $('.first-btn').text('Click me!');
    }
});

$('.third-btn').click(() => {
    if ($('.third-btn').text() === 'Try me!?'){
        $('.third-btn').text('THE POWER OF CLICKING!!!');
        $('.third-btn').css('font-weight', 'bold');
    }else {
        $('.third-btn').text('Try me!?');
        $('.third-btn').css('font-weight', 'normal');
    }
});

const colors = ['Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue', 'Cyan', 'Aqua', 'Teal', 'Green', 'Light Green', 'Lime', 'Sand', 'Khaki', 'Yellow',
            'Amber', 'Orange', 'Deep Orange', 'Blue Gray', 'Brown', 'Light Gray', 'Gray', 'Dark Gray', 'Pale Red', 'Pale Yellow', 'Pale Green', 'Pale-Blue'];


let countClick = 0;

$('.third-btn').click(() => {
    if (countClick === 0) {
        $('.btn').css('background', $('.text').val());
        countClick++;
    } else {
        alert('You have already pick a color...');
    }
});