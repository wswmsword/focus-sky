let exitLi6ByKeydown = false;

document.getElementById("en6").addEventListener("click", function(e) {
  z.entry(e);
});

document.getElementById("ex6").addEventListener("click", function(e) {
  z.exit(e);
});

document.getElementById("li6").addEventListener("keydown", function(e) {
  if (e.key === 'Escape' || e.key === 'Esc' || e.keyCode === 27) {
    exitLi6ByKeydown = true;
    z.exit(e);
    setTimeout(() => exitLi6ByKeydown = false);
  }
});

document.getElementById("li6").addEventListener("blur", function(e) {
  if (exitLi6ByKeydown) return ;
  setTimeout(() => {
    const active = document.activeElement;
    if (!e.target.contains(active)) {
      z.exit(e);
    }
  });
});