// Transform kramdown footnotes into Tufte-style sidenotes
// Only runs on screens >= 1000px wide

function initSidenotes() {
  // Only apply on wide screens
  if (window.innerWidth < 1000) return;

  const footnoteRefs = document.querySelectorAll('sup[id^="fnref:"]');
  const footnotesSection = document.querySelector('.footnotes');
  
  if (!footnotesSection) return;

  footnoteRefs.forEach(ref => {
    // Get the footnote ID (e.g., "fnref:1" -> "fn:1")
    const refId = ref.id.replace('fnref:', 'fn:');
    const footnoteItem = document.getElementById(refId);
    
    if (!footnoteItem) return;

    // Extract the footnote content (everything except the back-reference link)
    const footnoteContent = footnoteItem.cloneNode(true);
    const backRef = footnoteContent.querySelector('.reversefootnote');
    if (backRef) backRef.remove();

    // Create sidenote element with the same ID as the original footnote
    const sidenote = document.createElement('span');
    sidenote.className = 'sidenote';
    sidenote.id = refId; // Give sidenote the footnote's ID so :target works
    sidenote.innerHTML = `<span class="sidenote-number">${ref.textContent}</span>${footnoteContent.innerHTML}`;

    // Insert sidenote after the reference
    ref.parentNode.insertBefore(sidenote, ref.nextSibling);
    
    // Add class to the reference for styling
    ref.classList.add('sidenote-ref');
    
    // Remove the ID from the original footnote to avoid duplicates
    footnoteItem.removeAttribute('id');
  });
  
  // Handle clicks on footnote references to highlight the sidenote
  handleSidenoteClicks();
}

function handleSidenoteClicks() {
  // Remove previous highlight when clicking a new footnote
  document.addEventListener('click', (e) => {
    const clicked = e.target.closest('sup[id^="fnref:"] a');
    if (clicked) {
      // Remove highlight class from all sidenotes
      document.querySelectorAll('.sidenote-highlighted').forEach(note => {
        note.classList.remove('sidenote-highlighted');
      });
    }
  });
  
  // Highlight sidenote when hash changes (clicked or navigated to)
  function highlightTargetSidenote() {
    const hash = window.location.hash;
    if (hash.startsWith('#fn:')) {
      const targetSidenote = document.querySelector(hash + '.sidenote');
      if (targetSidenote) {
        // Remove previous highlights
        document.querySelectorAll('.sidenote-highlighted').forEach(note => {
          note.classList.remove('sidenote-highlighted');
        });
        // Add highlight to current target
        targetSidenote.classList.add('sidenote-highlighted');
      }
    }
  }
  
  window.addEventListener('hashchange', highlightTargetSidenote);
  // Also check on initial load if there's a hash
  if (window.location.hash) {
    highlightTargetSidenote();
  }
}

// Run on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidenotes);
} else {
  initSidenotes();
}

// Re-run on window resize (if size crosses 1000px threshold)
let lastWidth = window.innerWidth;
window.addEventListener('resize', () => {
  const currentWidth = window.innerWidth;
  const wasWide = lastWidth >= 1000;
  const isWide = currentWidth >= 1000;
  if (wasWide != isWide) {
    location.reload(); // Simple approach: reload on significant resize
  }
  lastWidth = currentWidth;
});