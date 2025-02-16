const typingSpeed = 50;

function displayLine(element, lines, lineIndex) {
    if (lineIndex < lines.length) {
        element.textContent += lines[lineIndex] + '\n';
        lineIndex++;
        setTimeout(() => displayLine(element, lines, lineIndex), typingSpeed);
    }
}

function startTypingEffect() {
    const terminalTexts = document.querySelectorAll('.terminaltext');
    terminalTexts.forEach((element, index) => {
        const text = element.textContent;
        const lines = text.split('\n');
        element.textContent = '';
        setTimeout(() => displayLine(element, lines, 0), index * 2000);
    });
}

window.onload = startTypingEffect;
