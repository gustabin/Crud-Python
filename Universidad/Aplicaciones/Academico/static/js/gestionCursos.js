(function () {
  const btnEliminacion = document.querySelectorAll(".btnEliminacion");
  window.setTimeout(function () {
    $(".alert")
      .fadeTo(1000, 0)
      .slideUp(1000, function () {
        $(this).remove();
      });
  }, 2500);

  btnEliminacion.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const confirmacion = confirm("¿Seguro de eliminar el registro?");
      if (!confirmacion) {
        e.preventDefault();
      }
    });
  });
})();
