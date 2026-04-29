document.addEventListener('DOMContentLoaded', function () {
    var timelineBlocks = document.querySelectorAll('.cd-timeline-block'),
        offset = 0.8;

    //hide timeline blocks which are outside the viewport
    hideBlocks(timelineBlocks, offset);

    //on scrolling, show/animate timeline blocks when enter the viewport
    window.addEventListener('scroll', function () {
        (!window.requestAnimationFrame)
            ? setTimeout(function () {
            showBlocks(timelineBlocks, offset);
        }, 100)
            : window.requestAnimationFrame(function () {
            showBlocks(timelineBlocks, offset);
        });
    });
});

function hideBlocks(blocks, offset) {
    blocks.forEach(function (block) {
        if (block.getBoundingClientRect().top + window.scrollY > window.scrollY + window.innerHeight * offset) {
            block.querySelectorAll('.cd-timeline-img, .cd-timeline-content').forEach(function (el) {
                el.classList.add('is-hidden');
            });
        }
    });
}

function showBlocks(blocks, offset) {
    blocks.forEach(function (block) {
        if (block.getBoundingClientRect().top + window.scrollY <= window.scrollY + window.innerHeight * offset && block.querySelector('.cd-timeline-img').classList.contains('is-hidden')) {
            block.querySelectorAll('.cd-timeline-img, .cd-timeline-content').forEach(function (el) {
                el.classList.remove('is-hidden');
                el.classList.add('bounce-in');
            });
        }
    });
}
