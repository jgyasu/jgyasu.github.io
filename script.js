document.addEventListener('DOMContentLoaded', function () {
    const { annotate, annotationGroup } = RoughNotation;

    const highlights = document.querySelectorAll(".highlight-me");
    const underlines = document.querySelectorAll(".underline-me");
    const circles = document.querySelectorAll(".circle-me");

    const annotations = [];

    highlights.forEach(el => {
        annotations.push(annotate(el, {
            type: "highlight",
            color: "#ffeb3b",
            animationDuration: 800,
            padding: 4
        }));
    });
    
    underlines.forEach(el => {
        annotations.push(annotate(el, {
            type: "underline",
            color: "#e91e63",
            animationDuration: 800
        }));
    });


    circles.forEach(el => {
        annotations.push(annotate(el, {
            type: "circle",
            color: "#3f51b5",
            animationDuration: 800,
            padding: 8
        }));
    });

    if (annotations.length) {
        const group = annotationGroup(annotations);
        group.show();
    }
});
